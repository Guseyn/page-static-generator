'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  Page,
  Body,
  Head
} = require('./../index');

new EqualAssertion(
  new Page(
    'lang="en"',
    new Head('elm1', 'elm2', 'elm3'),
    new Body('fakeAttr="fakeValue"', 'elm1', 'elm2', 'elm3')
  ), '<html lang="en">\n\t<head>\n\t\telm1\n\t\telm2\n\t\telm3\n\t</head>\n\t<body fakeAttr="fakeValue">\n\t\telm1\n\t\telm2\n\t\telm3\n\t</body>\n</html>\n'
).call();
