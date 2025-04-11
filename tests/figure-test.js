const cheerio = require('cheerio');
const fs = require('fs');
const { assert } = require('./helpers');


const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

const figure = $('figure');
const img = $('figure img');


const condition = figure.length > 0 && img.length > 0;

assert(
  condition,
  'Image with figure and img tags is present.',
  'Either figure or img or both tags are missing.'
);