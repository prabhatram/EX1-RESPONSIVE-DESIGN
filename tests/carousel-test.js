const fs = require('fs');
const { assert } = require('./helpers');

const css = fs.readFileSync('styles.css', 'utf-8');


const hasBorderRadius = css.match(/{[^}]*border-radius\s*:/);
const hasBackground = css.match(/{[^}]*background(?:-color)?\s*:/);


assert(
  hasBorderRadius && hasBackground,
  'Caption-style test passed: Found border-radius and background styling.',
  'Caption-style test failed: Missing border-radius or background styling.'
);
