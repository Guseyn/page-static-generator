'use strict'

const { AsyncObject } = require('@cuties/cutie');

class NoScript extends AsyncObject {

  constructor(text) {
    super(text);
  }

  definedSyncCall() {
    return (text) => {
      return `<noscript>${text}</noscript>`;
    }
  }

}

module.exports = NoScript;
