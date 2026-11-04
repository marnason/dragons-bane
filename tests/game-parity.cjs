// Compare the restored rules directly with the untouched recovered source.
// Run with: node tests/game-parity.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const original = new TextDecoder('windows-1252').decode(fs.readFileSync(path.join(root, 'thegame.htm')));
const source = original.match(/<script>([\s\S]*?)<\/script>/)[1];
const restored = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
const defaults = {};
for (const tag of original.matchAll(/<input\b[^>]*>/gi)) {
  const name = tag[0].match(/\bname="([^"]*)"/i)?.[1];
  if (name) defaults[name] = tag[0].match(/\bvalue="([^"]*)"/i)?.[1] || '';
}
for (const tag of original.matchAll(/<textarea\b[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/textarea>/gi)) {
  defaults[tag[1]] = tag[2];
}
defaults.imgweapon = '';

function run(code, action, overrides, random, prompts = ['Player']) {
  const fields = {};
  for (const [name, initial] of Object.entries({ ...defaults, ...overrides })) {
    let value = String(initial);
    fields[name] = { get value() { return value; }, set value(next) { value = String(next); }, src: '' };
  }
  const alerts = [];
  let closes = 0;
  const context = vm.createContext({
    game: fields, document: { game: fields },
    Math: Object.assign(Object.create(Math), { random: () => random }),
    alert: message => alerts.push(message), prompt: () => prompts.shift(),
    parent: { close: () => closes++ }, setTimeout: () => {},
  });
  vm.runInContext(code, context);
  vm.runInContext(action, context);
  return { fields: JSON.parse(JSON.stringify(fields)), alerts, closes };
}

let cases = 0;
function compare(action, overrides = {}, random = 0.5, prompts) {
  assert.deepEqual(
    run(restored, action.replace(/\bname\(\)/g, 'chooseName()'), overrides, random, prompts?.slice()),
    run(source, action, overrides, random, prompts?.slice()),
    JSON.stringify({ action, overrides, random }),
  );
  cases++;
}
for (let level = 1; level <= 99; level++) {
  for (const random of [0, 0.1, 0.25, 0.5, 0.7, 0.75, 0.9, 1]) {
    compare('opponent()', { level, name: 'Player' }, random);
    for (const badlife of [50, 0, 'DEAD']) {
      compare('attacker()', { level, badlife, enemyattack: 6, enemyarmor: 3 }, random);
    }
    compare('attacker()', { level, experience: 100000, badlife: 50, enemyattack: 6, enemyarmor: 3 }, random);
    compare('buysomethin()', { level }, random);
  }
}
for (const life of [0, 50, 95, 100, 110]) {
  for (const money of [0, 24, 25, 100]) compare('heal(); maxlife()', { life, money });
}
for (const item of [0, 1, 2, 20]) {
  for (const money of [0, 1, 99, 100, 101]) {
    compare('buyitem1()', { xitem1: item, money });
    compare('buyitem2()', { xitem2: item, money });
  }
}
for (const prompts of [['Player'], ['goldentreasure', 'Player'], ['gotoyear3000', 'Player'], ['123dodgeball']]) {
  compare('name()', {}, 0.5, prompts);
}
console.log(`Passed ${cases} gameplay comparisons against thegame.htm.`);
