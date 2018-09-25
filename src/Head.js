'use strict'

const { AsyncObject } = require('@cuties/cutie');

class Head extends AsyncObject {

  constructor(...elms) {
    super(...elms);
  }

  definedSyncCall() {
    return (...elms) => {
      return `<head>\n\t\t${elms.join('\n\t\t')}\n\t</head>`;
    }
  }

}

module.exports = Head;
