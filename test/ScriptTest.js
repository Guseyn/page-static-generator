'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Script
} = require('./../index');

new EqualAssertion(
  new Script('src', 'attr="value"'),
  '<script src="src" attr="value"></script>'
).call();
