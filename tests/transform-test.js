const fs = require('fs');
const css = require('css');
const { assert } = require('./helpers'); 

const rawCSS = fs.readFileSync('styles.css', 'utf8');
const parsed = css.parse(rawCSS);

const condition = parsed.stylesheet.rules.some(rule =>
  rule.selectors &&
  rule.selectors.some(s => s.includes(':hover')) &&
  rule.declarations &&
  rule.declarations.some(d => d.property === 'transform' && d.value.includes('scale'))
);


assert(
  condition,
  'Found :hover rule with transform: scale.',
  'Missing :hover rule with transform: scale.'
);
