'use strict'

const { AsyncObject } = require('@cuties/cutie');

class Head extends AsyncObject {

  constructor(...elms) {
    super(...elms);
  }

  definedSyncCall() {
    return (...elms) => {
      return `<head>${elms.join('')}</head>`;
    }
  }

}

module.exports = Head;
