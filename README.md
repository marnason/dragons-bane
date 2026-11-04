# The Dragon's Bane

A browser RPG originally made in 2003–2004, recovered from an external hard
drive and restored to run in modern browsers.

The restoration keeps the original game logic, writing, artwork, and controls.
A small compatibility layer replaces browser behavior that only existed in old
versions of Internet Explorer, while missing artwork falls back to the assets
that survived on the drive.

### Preservation baseline

The author confirmed that **`thegame.htm` is the version they played**.
That file remains untouched as the source of truth. `game.js` contains its
gameplay script with explicit form access and the name prompt renamed to avoid
`window.name`. Cancelling the prompt uses "Adventurer". The 100-health check
runs once after Attack/Heal instead of accumulating recurring timers; its cap
and warning are retained.

The initial restoration mistakenly used `INDEX.htm`, a different version.
Its extra shield drop, cheats, and boss changes have been removed. Starting
armor is restored to 20. The original damage formula is restored without a
zero-damage clamp: `thegame.htm` never grants the problematic 20-point shield.
The repaired, centered presentation and disabled close button remain.

Run `node tests/game-parity.cjs` to compare the restored gameplay directly with
the recovered script across encounters, combat, level transitions, rewards,
healing, item purchases, and cheats. Unfinished shop behavior and other original
quirks are deliberately preserved.

## Play locally

Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
