'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Head
} = require('./../index');

new EqualAssertion(
  new Head('elm1', 'elm2', 'elm3'),
  '<head>\n\t\telm1\n\t\telm2\n\t\telm3\n\t</head>'
).call();
