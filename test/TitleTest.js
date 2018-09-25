'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Title
} = require('./../index');

new EqualAssertion(
  new Title("title"),
  '<title>title</title>'
).call();
