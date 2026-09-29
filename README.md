# StickMan Gen

Build stick-figure kung fu fights in the browser. Pick moves from a library, chain them into a sequence, and export the fight as a 1080p video with sound.

Ink-on-paper stick figures in the spirit of the classic Flash-era stick fight animations, with an original move set and choreography.

**Live:** https://stickmangen.vercel.app  
**Source:** https://github.com/edmondyang81/stickmanGen  
Made by **Edmond Yang**

## Features

- **40 chainable moves**: strikes, kicks, aerial attacks, throws, signature specials (Ki Blast, Ground Quake, Matrix Dodge, Rising Dragon…) and finishers.
- **Seamless chaining**: every move starts and ends in the same stance, and in *Seamless* mode each move starts while the previous one is still finishing.
- **Up to four fighters**: one hero against up to three opponents. Opponents step in and out, and knocked-out fighters stay down.
- **Weapons**: one-handed sword and two-handed axe, with their own moves, swoosh trails, sparks and sounds. Moves follow the hands: an axe blocks punches and grabs, and a sword blocks two-handed moves.
- **Weapon Clash**: blade-on-blade exchanges and a grinding bind.
- **Effects**: slow motion and zoom on knockouts and takedowns, impact bursts, flash frames, speed lines, red spray on blade hits, and an optional "heads roll" on blade finishers.
- **Synthesized sound**: all SFX are generated live with the Web Audio API, so there are no audio files.
- **Video export**: records the canvas and audio to MP4 (or WebM, depending on the browser) at any playback speed.
- **Editor**: a timeline with undo, drag-to-reorder, duplicate and delete. Moves have search and category filters with pose thumbnails. Fighters have names, colors, weapons and headbands, and there's an optional "VS" title card.

## Run it

Use it online at **[stickmangen.vercel.app](https://stickmangen.vercel.app)**, or download the repo and open `index.html` in your browser. There's no install, build or server.

## Controls

| Key | Action |
| --- | --- |
| Space | Play / pause |
| ← / → | Previous / next move |
| Ctrl/Cmd + Z | Undo |
| Delete | Remove the selected move |

## Project layout

```
index.html        page markup
css/styles.css    editor styles
js/app.js         everything else, in sections:
                  skeleton + poses → move library → compiler (sequence → keyframes)
                  → audio (Web Audio synth) → renderer (canvas) → editor UI → export
```

### How it works

- **Poses** are joint angles for a 10-bone stick figure: torso lean, upper and lower arms and legs, hip height and body rotation.
- **Moves** are keyframes for the attacker (`X`) and defender (`Y`), written in a local frame where X starts at 0 and Y starts at 70. Each move also has a list of effect and sound events.
- The **compiler** places moves in world space, mirrors them depending on which side the attacker stands, inserts step-ins and get-ups, repositions idle fighters, and overlaps moves for seamless chaining.
- **Interpolation** uses monotone cubic splines, so motion flows through keyframes without overshoot. Strikes use snap easing.
- The **renderer** is stateless in time. Every effect (particles, rolling heads, sparks) is a function of time, so scrubbing and export always match playback.
- The **axe grip** uses two-bone IK, so the second hand always holds the handle.

## Adding a move

Add an entry to `MOVES` in `js/app.js`:

```js
MOVES.myMove = {
  name: 'My Move', dur: 1.0,
  X: [[.15,'guard',10],[.3,'punch',20,{e:'out'}],[1,'guard',20]],   // [time, pose, x, overrides]
  Y: [[.32,'hit',78,{e:'out'}],[1,'guard',90]],                       // end 70 apart, both in guard
  fx: [['whoosh',.22],['hit',.3,{j:'X.h1',s:.8}]]
};
```

Then list it in a group in `GROUPS`. If it uses hands, add its hand needs to `NEEDS`.

## License

[MIT](LICENSE)
