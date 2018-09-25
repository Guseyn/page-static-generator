'use strict'

const { AsyncObject } = require('@cuties/cutie');

class Title extends AsyncObject {

  constructor(text) {
    super(text);
  }

  definedSyncCall() {
    return (text) => {
      return 
`<title>${text}</title>`;
    }
  }

}

module.exports = Title;
