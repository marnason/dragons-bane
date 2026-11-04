# The Dragon's Bane

A browser RPG originally made in 2003–2004, recovered from an external hard
drive and restored to run in modern browsers.

The restoration keeps the original game logic, writing, artwork, and controls.
A small compatibility layer replaces browser behavior that only existed in old
versions of Internet Explorer, while missing artwork falls back to the assets
that survived on the drive.

### Combat compatibility correction

The recovered `INDEX.htm` awards 20 protection for the "Shield +1" drop.
Its original damage formula can therefore become negative against weak enemies.
The restoration retains the protection value and formula but floors damage at
zero so attacks cannot heal the player. This is a deliberate correction to the
recovered source, not a JavaScript arithmetic compatibility change. The other
recovered version, `thegame.htm`, does not contain this shield drop.

The 100-health check still runs after Attack and Heal, including the original
warning when health exceeds 100. It no longer starts a new recurring timer on
every click. Other combat, reward, and progression quirks remain unchanged.

## Play locally

Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
