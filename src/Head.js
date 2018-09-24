'use strict'

const { AsyncObject } = require('@cuties/cutie');

class Head extends AsyncObject {

  constructor(...elms) {
    super(...elms);
  }

  definedSyncCall() {
    return (...elms) => {
      return 
`<head>
  ${elms.join('\n\t')}
</head>`;
    }
  }

}

module.exports = Head;
