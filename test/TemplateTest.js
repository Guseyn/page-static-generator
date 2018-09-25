'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Template
} = require('./../index');

new EqualAssertion(
  new Template("./test/template.html"),
  '<div class="template1">{text}<div class="place-for-template2">{innerTemplate}</div>\\{some text\\}</div>\n'
).call();

