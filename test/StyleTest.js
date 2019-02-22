'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Style
} = require('./../index')

new StrictEqualAssertion(
  new Style('href', 'attr="value"'),
  '<link rel="stylesheet" href="href" attr="value">'
).call()
