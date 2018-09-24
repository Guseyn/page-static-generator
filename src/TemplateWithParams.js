'use strict'

const { AsyncObject } = require('@cuties/cutie');

class TemplateWithParams extends AsyncObject {

  constructor(template, ...params) {
    super(template, ...params);
  }

  definedSyncCall() {
    return (template, ...params) => {
      return 
`<link rel="stylesheet" href="${href}" ${attrs}>`;
    }
  }

}

module.exports = TemplateWithParams;
