'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Base
} = require('./../index')

new StrictEqualAssertion(
  new Base('https://www.w3schools.com/images/', 'target="_blank"'),
  '<base href=https://www.w3schools.com/images/ target="_blank">'
).call()
