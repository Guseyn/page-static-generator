'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Body
} = require('./../index')

new StrictEqualAssertion(
  new Body('fakeAttr="fakeValue"', 'elm1', 'elm2', 'elm3'),
  '<body fakeAttr="fakeValue">elm1elm2elm3</body>'
).call()
