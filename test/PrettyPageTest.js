'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  PrettyPage,
  Template,
  Page,
  Body,
  Head
} = require('./../index');

new EqualAssertion(
  new PrettyPage(
    new Page(
      'lang="en"',
      new Head('elm1', 'elm2', 'elm3'),
      new Body('fakeAttr="fakeValue"', 'elm1', 'elm2', 'elm3')
    )
  ), '<!DOCTYPE html>\n<html lang="en">\n\n  <head>elm1elm2elm3</head>\n\n  <body fakeAttr="fakeValue">elm1elm2elm3</body>\n\n</html>\n'
).call();
