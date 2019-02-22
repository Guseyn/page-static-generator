'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Script
} = require('./../index')

new StrictEqualAssertion(
  new Script('src', 'attr="value"'),
  '<script src="src" attr="value"></script>'
).call()
