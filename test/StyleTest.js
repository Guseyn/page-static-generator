'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Style
} = require('./../index');

new EqualAssertion(
  new Style('href', 'attr="value"'),
  '<link rel="stylesheet" href="href" attr="value">'
).call();
