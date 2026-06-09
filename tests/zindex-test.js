const fs = require('fs');
const css = require('css');
const { assert } = require('./helpers'); 

const raw = fs.readFileSync('styles.css', 'utf8');
const parsed = css.parse(raw);


const condition = parsed.stylesheet.rules.some(rule =>
  rule.declarations?.some(decl => decl.property === 'z-index')
);

assert(
  condition,
  'Found a rule with z-index ',
  'No rule with z-index found '
);
