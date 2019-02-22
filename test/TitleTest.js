'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Title
} = require('./../index')

new StrictEqualAssertion(
  new Title('title'),
  '<title>title</title>'
).call()
