'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Body
} = require('./../index');

new EqualAssertion(
  new Body('fakeAttr="fakeValue"', 'elm1', 'elm2', 'elm3'),
  '<body fakeAttr="fakeValue">\n\t\telm1\n\t\telm2\n\t\telm3\n\t</body>'
).call();
