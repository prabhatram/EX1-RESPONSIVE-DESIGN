const fs = require('fs');
const cheerio = require('cheerio');
const { assert } = require('./helpers');

const html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

let allHaveLabels = true;

$('input').each(function () {
  const id = $(this).attr('id');
  if (id && $(`label[for="${id}"]`).length === 0) {
    allHaveLabels = false;
  }
});

assert(
  allHaveLabels,
  'Label test passed: Your radio buttons have labels.',
  'Label test failed: Some or all your radio buttons do not have labels.'
);
