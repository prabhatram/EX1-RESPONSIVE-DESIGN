const cheerio = require('cheerio');
const fs = require('fs');
const { assert } = require('./helpers');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

condition = $('main').length === 1 && $('section').length >= 1;

assert(
  condition,
  'The layout contains the required elements of main and more than one section.',
  'The layout is missing main or section, or both'
);
