'use strict'

const { AsyncObject } = require('@cuties/cutie');
const pretty = require('pretty');

class PrettyPage extends AsyncObject {

  constructor(page) {
    super(page);
  }

  definedSyncCall() {
    return (page) => {
      return pretty(page);
    }
  }

}

module.exports = PrettyPage;
