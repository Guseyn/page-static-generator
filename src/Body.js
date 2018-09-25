'use strict'

const { AsyncObject } = require('@cuties/cutie');

class Body extends AsyncObject {

  constructor(attrs, ...elms) {
    super(attrs, ...elms);
  }

  definedSyncCall() {
    return (attrs, ...elms) => {
      return `<body ${attrs}>\n\t\t${elms.join('\n\t\t')}\n\t</body>`;
    }
  }

}

module.exports = Body;
