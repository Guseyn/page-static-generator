'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Meta
} = require('./../index');

new EqualAssertion(
  new Meta('attr1="val1", attr2="val2"'),
  '<meta attr1="val1", attr2="val2">'
).call();
