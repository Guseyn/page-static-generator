'use strict'

const { AsyncObject } = require('@cuties/cutie');

class Body extends AsyncObject {

  constructor(attrs, ...elms) {
    super(attrs, ...elms);
  }

  definedSyncCall() {
    return (attrs, ...elms) => {
      return 
`<body ${attrs}>
  ${elms.join('\n\t')}
</body>`;
    }
  }

}

module.exports = Body;
