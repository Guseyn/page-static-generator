'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  NoScript
} = require('./../index');

new EqualAssertion(
  new NoScript('bad browser'),
  '<noscript>bad browser</noscript>'
).call();
