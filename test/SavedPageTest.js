'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  SavedPage,
  Template,
  Page,
  Body,
  Head
} = require('./../index');

new EqualAssertion(
  new Template(
    new SavedPage(
      './test/page.html',
      new Page(
        'lang="en"',
        new Head('elm1', 'elm2', 'elm3'),
        new Body('fakeAttr="fakeValue"', 'elm1', 'elm2', 'elm3')
      )
    )
  ), '<!DOCTYPE html>\n<html lang="en"><head>elm1elm2elm3</head><body fakeAttr="fakeValue">elm1elm2elm3</body></html>\n'
).call();
