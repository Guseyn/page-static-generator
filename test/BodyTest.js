'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Body
} = require('./../index');

new EqualAssertion(
  new Body('fakeAttr="fakeValue"', 'elm1', 'elm2', 'elm3'),
  '<body fakeAttr="fakeValue">elm1elm2elm3</body>'
).call();
