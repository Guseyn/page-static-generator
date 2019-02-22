'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Template,
  TemplateWithParams
} = require('./../index')

new StrictEqualAssertion(
  new TemplateWithParams(
    new Template('./test/template.html'),
    'text', 'template'
  ),
  '<div class="template1">text<div class="place-for-template2">template</div>{some text}</div>\n'
).call()
