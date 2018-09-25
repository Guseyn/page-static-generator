'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Link
} = require('./../index');

new EqualAssertion(
  new Link('attr1="val1", attr2="val2"'),
  '<link attr1="val1", attr2="val2">'
).call();
