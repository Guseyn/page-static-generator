'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  NoScript
} = require('./../index')

new StrictEqualAssertion(
  new NoScript('bad browser'),
  '<noscript>bad browser</noscript>'
).call()
