'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Base
} = require('./../index');

new EqualAssertion(
  new Base('https://www.w3schools.com/images/', 'target="_blank"'),
  '<base href=https://www.w3schools.com/images/ target="_blank">'
).call();
