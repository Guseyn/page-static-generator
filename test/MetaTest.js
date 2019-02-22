'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Meta
} = require('./../index')

new StrictEqualAssertion(
  new Meta('attr1="val1", attr2="val2"'),
  '<meta attr1="val1", attr2="val2">'
).call()
