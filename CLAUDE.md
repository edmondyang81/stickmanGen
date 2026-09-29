# StickMan Gen (formerly Stickman Duel): handoff

This is the handoff for continuing work in Claude Code. The project was built in a claude.ai chat session as a published artifact, then exported to this folder as a plain static web app.

## Status

- **Working, feature-complete v1.** `index.html` + `css/styles.css` + `js/app.js`. There's no build step and no dependencies.
- **Git:** one commit on `main`. There's **no remote yet**.
- **Local path:** `D:\Dropbox\! Projects\AI\StickMan`
- **Owner:** Edmond Yang (GitHub `edmondyang81`). He prefers short, direct replies.

## First task: publish to GitHub

The owner wants this as a **public** repo named `stickman-duel`:

```bash
gh repo create stickman-duel --public --source=. --push
# without gh: create an empty repo on github.com/new, then
git remote add origin https://github.com/edmondyang81/stickman-duel.git
git push -u origin main
```

Optionally enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root). The site will then be at `https://edmondyang81.github.io/stickman-duel`.

The folder lives in Dropbox. Don't let Dropbox and git fight: work on one machine at a time. If a `.git/index.lock` is ever left behind, delete it.

---

## What the app does

A browser editor for stick-figure kung fu fights in the Flash-era "Xiaoxiao" style, with an original move set and choreography. Users pick moves from a library, chain them on a timeline, customise up to 4 fighters, and export an MP4/WebM with synthesized sound.

## File layout

```
index.html        markup: header, stage canvas, transport, timeline panel, tabbed sidebar (Moves/Fighters/Settings)
css/styles.css    all styles (dark editor chrome, paper-white stage). Single dark theme on purpose.
js/app.js         one IIFE, sections in this order:
  SKELETON        bone lengths L, GAP=70, poses P, FIELDS
  MOVE LIBRARY    MOVES (+ Object.assign blocks, generated flurries), NEEDS, canUse, GROUPS, ORDER, CLASSIC
  COMPILER        compile(seq, roster, flow) → TL; build(); poseAt(); skel(); sk(); speedAt()
  AUDIO           Web Audio synth: ensureAudio, nz(), tone(), SFX table, playSfx()
  RENDER          canvas frame(T), drawFigure, effects, title card, head-roll, look/colours
  STATE & UI      roster/seq state, localStorage, undo, tabs, matchup, palette + thumbnails, fighters, settings, sequence list
  EXPORT          MediaRecorder capture (canvas + audio) → save
  LOOP            requestAnimationFrame tick, SFX triggering, playhead
```

`window.__stick` is a debug/test hook: `set(t)`, `pause()`, `end()`, `segs()`.

## Core data model

### Poses (`P`)
Each pose is a set of joint angles in degrees, in *facing space* (forward = +):
- `ln`: torso lean from vertical. **The field is `ln`, not `t`**, because `t` collided with keyframe time in an early bug.
- `ua1/fa1`, `ua2/fa2`: upper arm (absolute, measured from straight down) and forearm (relative to the upper arm). `1` is the near limb, `2` the far limb.
- `th1/sh1`, `th2/sh2`: thigh (absolute) and shin (relative). A negative shin angle bends the knee.
- `dy`: hip height offset (+ is lower). `rot`: whole-body rotation (flips, lying down).
- Rotation rule: the torso angle is `ln + rot`, and each limb's world angle is `angle − rot`.

### Moves (`MOVES`)
```js
id: { name, dur, X:[...keys], Y:[...keys], fx:[...events],
      swap?:1, ko?:1, sig?:1, wpn?:'sword'|'axe' }
key   = [time, poseName, localX, {e:'io'|'out'|'in'|'lin', f:±1, spin:deg, dy, ln, ...poseOverrides}]
event = [type, time, {j:'X.h1'|'Y.neck'|'X.tip', s:size, who:'X'|'Y', mid:1, slow:[dur,speed,pre?], big:1, inv:secs, bt:1, dur, to, toXY, t1, ripple, low, slide}]
```
**Invariant:** local frame X starts at 0 facing +1 and Y starts at 70 facing −1, both in `guard`. Every move must **end with both in `guard`, exactly 70 apart** (`swap` moves end on opposite sides). KO moves end with Y in `lying`/`facedown`. This invariant is what makes any order chain smoothly.

- `NEEDS[id] = {X:'both'|'one'|'weapon', Y:...}`: hand requirements. The rules live in `canUse(weapon, need)`: an axe blocks `one` and `both`, a sword blocks `both`, and `weapon` requires any weapon. `whyNot(id, att, def)` in the UI returns the human-readable reason.
- `GROUPS` drives the palette categories and `ORDER`.
- `wpn` moves are only available when the attacker holds that weapon.

### Sequence and roster
- `seq = [{id, who, vs}]`, with fighter ids `A` (hero), `B`, `C`, `D`.
- `roster = [{id, name, color, band, weapon:'none'|'sword'|'axe'}]`.

## Compiler (`compile`)
Turns `seq` into per-fighter keyframe tracks `TL.K[id]`, events `TL.fx`, segments `TL.segs`, slow-mo ranges `TL.slow`, and `TL.end`.
1. **Intro:** fighters run in from off-screen. It's longer when `showTitle` is on.
2. For each item: **getup** a downed attacker or defender if needed (and reattach a severed head), then **engage** (the defender runs to `attacker.x ± 70`, and facings are fixed). After that the move is placed with origin `X0 = attacker.x` and mirror `m = attacker.facing`.
3. **Chaining (`flow` 0 / 0.6 / 0.95):** if the same pair continues, the next move starts inside the previous move's recovery tail (`dur − lastNonGuard`). Keys and fx after the cut are dropped.
4. **Idle fighters** (group mode) are repositioned beyond the action's x-range on their side and face the centre. Downed fighters hold their pose.
5. KO leaves the defender down. They stay down unless used again.
6. `build()` sorts keys and nudges duplicate times. It resolves `rot`, using the shortest path unless a key has `spin`, and precomputes **monotone cubic (Fritsch–Carlson) tangents**.
7. `poseAt()`: `out`/`in` spans use snappy easing, while `io`/`lin` spans use Hermite interpolation, so motion flows through keys.

## Renderer (`frame(T)`)
**Stateless in time.** Everything (particles, sparks, rolling heads, dust) is computed from `T` and event times, so scrubbing and export always match playback. Randomness comes from `rnd(seed)`.

Draw order: ground → cracks → shadows → speed lines → dust → weapon swoosh arcs → ghost trails → fighters (downed first, hero last) → severed heads + neck spurt → reattach puff → name tags → signature fx (charge, proj, quake, cut) → blade spray → weapon clashes and grind → impact bursts → slow-mo focus lines + letterbox → fades → title card.

- Camera follows the active pair (`seg.pair`), widens to keep a group in frame, adds headroom for airborne fighters, and applies `camZoom`.
- **Inverted flash frames** (`inv`) swap to the black palette.
- **Weapons (`skel(p, w)`):** the weapon direction follows forearm 1. The axe's second hand is placed by **2-bone IK** onto the handle 13 units below hand 1. The axe blade side is chosen by the heuristic `s.bn`.
- `headlessAt(id, T)` hides a fighter's head between a `behead` event and a later `reattach`. `headPath(e)` pre-simulates and caches the bounce/roll path on the event.

### Event types
`whoosh hit heavy block land thud clash charge proj quake slash cut wclash grind bullet matrixfx behead reattach title`

## Audio
Everything is synthesized with `nz()` (filtered noise) and `tone()` (oscillator sweeps, optional distortion) through a compressor to the speakers and a `MediaStreamDestination` used for recording. `playSfx()` adds a weapon layer to hits (sword ring, axe chop). Events fire when playback time crosses them, not while scrubbing. The audio context starts on the first user gesture.

## UI
- **Tabs:** Moves (matchup card attacker ⇄ target, search, category chips, cards with pose thumbnails drawn by `thumb()`), Fighters (name, colour swatches, weapon, headband, add/remove), Settings (chaining, camera, title card, heads roll, name tags).
- **Sequence list** (replaced the time-scaled timeline at the owner's request): a grid of numbered move cards in play order, with no ruler, playhead or scrubbing. Click a card to select it and seek; the edit bar offers Earlier/Later/Duplicate/Delete. HTML5 drag reorders. The playing move is highlighted. Auto get-ups aren't shown.
- **Undo:** `commit(fn, msg)` pushes a snapshot, and `undo()` restores it. Ctrl/Cmd+Z works too.
- **Keys:** Space (play/pause), ←/→ (previous/next move), Delete (remove selected move).
- **Weapon change:** `pruneForWeapons()` removes moves that no longer fit, with Undo available. Random and Classic only pick valid moves.
- **localStorage keys** (`stickman-*`): `seq roster zoom flow tags title behead rate sound tab`.

## Copy as text
`sequenceText()` builds a video prompt (for Seedance): fighter lines from the roster (fighters are always "Fighter One/Two/…" by roster position, never their names; no style paragraph, per the owner), then `[t0–t1s]` beats from `TL.segs` using `DESC[id]` (`{A}`/`{D}` placeholders; `*_keep` variants when heads roll is off). Times are wall-clock at the current speed, including slow-mo (`realTime()`), and the beats are split into clips of 15 s or less. **When adding a move, add a `DESC` line too.** `window.__stick.text()` returns the text.

## Export
`MediaRecorder` captures `canvas.captureStream(60)` plus the audio track at 1920×1080, 10 Mbps, preferring MP4 (avc1) and falling back to WebM. It records in real time at the current speed. Inside claude.ai it uses the artifact `downloads` capability (`window.claude.use('downloads')`). Everywhere else (GitHub Pages, local) it uses `browserSave()`, which is a plain `<a download>`.

---

## Owner's decisions (keep these)
- **Slow motion and zoom-ins only on KOs and takedowns.** The one exception is **Matrix Dodge**, which has bullet time but no zoom and no focus lines. The owner hasn't confirmed it, so ask before changing.
- **Title card off by default** (toggle in Settings).
- **Staff was removed.** The weapons are a **one-handed sword** and a **two-handed axe**, and moves must respect free hands.
- **Red spray only on blade hits** (sword and axe). **Heads roll** is on by default for blade finishers (Iaido Cut, Executioner), with a toggle.
- **Chaining defaults to Seamless.** Speed defaults to **1.5×**, with options 0.5×–5×.
- Ink-on-paper look: black figures, red accents, a paper-white stage in a dark editor.

## Known gaps / untested
- **Video export and the save flow haven't been tested in a real browser**: no MediaRecorder or MP4 support check, and nothing was tested on Safari.
- **Audio hasn't been listened to.** The synthesis was written blind.
- HTML5 drag-to-reorder doesn't work on touch. The Earlier/Later buttons cover it.
- Blade hits' impact bursts are drawn at the weapon tip, which is sometimes above the target. The spray already originates on the body.
- Idle group fighters can overlap long-travel moves.
- The Google Fonts link (Anton, IBM Plex) falls back to Impact/system fonts offline.

## Ideas offered but not built
Stages/backgrounds (dojo, rooftop, bamboo, bridge), a synthesized music track, "ROUND 1 / FIGHT / K.O." stamps, GIF export, shareable sequence codes, vertical 9:16 export for TikTok/Reels, more weapons (spear, nunchaku), and rigging for a Blender version (Seedance reference).

## Testing
There's no test suite. Visual checks used Playwright with the system Chromium:
```js
await page.goto('file:///…/index.html');
await page.evaluate(() => { localStorage.setItem('stickman-seq', JSON.stringify([{id:'wko',who:'A',vs:'B'}])); });
await page.reload(); await page.evaluate(() => window.__stick.pause());
const segs = await page.evaluate(() => window.__stick.segs());
await page.evaluate(t => window.__stick.set(t), segs[0].T0 + 0.5);
await page.locator('#c').screenshot({ path: 'frame.png' });
```
Render contact sheets of key frames per move after changing choreography.

## Adding a move (checklist)
1. Add any new poses to `P`. Keep the angle conventions above.
2. Add the move to `MOVES`: local frame X starts at 0 and Y at 70; end both in `guard` 70 apart.
3. Add fx events for sound and visuals. Use `big:1` + `slow` only for KO or takedown moves.
4. Add hand needs to `NEEDS` if the move uses hands. Set `wpn` if it's weapon-specific.
5. List the move in `GROUPS`.
6. Check it chained after and before other moves, mirrored (the other fighter attacking), and with weapons equipped.
