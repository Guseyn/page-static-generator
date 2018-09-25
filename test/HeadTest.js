'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Head
} = require('./../index');

new EqualAssertion(
  new Head('elm1', 'elm2', 'elm3'),
  '<head>elm1elm2elm3</head>'
).call();
