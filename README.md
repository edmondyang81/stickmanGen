# Stickman Duel

A browser editor for stick-figure kung fu fights in the style of the old Flash-era "Xiaoxiao" animations, with its own move set and choreography. Pick moves from a library, chain them on a timeline, customise up to four fighters, and export the fight as a video with synthesized sound.

**Live:** https://edmondyang81.github.io/stickmanGen

## Features

- **Move library:** strikes, throws, flurries, signature moves and KO finishers, sorted into categories with search and pose thumbnails.
- **Timeline:** chain moves, reorder them, duplicate or delete, scrub, and undo (Ctrl/Cmd+Z).
- **Fighters:** up to 4, each with a name, colour, headband and weapon (none, one-handed sword, or two-handed axe). Moves respect free hands.
- **Cinematics:** a camera that follows the action, slow motion and zoom on KOs, impact flashes, dust, and speed lines.
- **Sound:** every effect is synthesized with Web Audio, so there are no sample files.
- **Export:** 1920×1080 MP4 (WebM where MP4 isn't supported) with audio.

## Run it

Everything is static: no build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Keys

| Key | Action |
| --- | --- |
| Space | Play / pause |
| ← / → | Previous / next move |
| Delete | Remove the selected move |
| Ctrl/Cmd+Z | Undo |

## Project layout

```
index.html        page markup
css/styles.css    styles
js/app.js         skeleton, move library, compiler, audio, renderer, UI, export
```

Your sequence and settings are saved in the browser's `localStorage`.

## Known limitations

- Video export needs `MediaRecorder` and has been tested least in Safari.
- Drag-to-reorder doesn't work on touch screens. Use the Earlier/Later buttons instead.

## License

[MIT](LICENSE)
