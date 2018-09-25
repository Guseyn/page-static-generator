'use strict'

const { AsyncObject } = require('@cuties/cutie');

// attributesForHtmlTag - string like 'lang="en"'
class Page extends AsyncObject {

  constructor(attrs, head, body) {
    super(attrs, head, body);
  }

  definedSyncCall() {
    return (attrs, head, body) => {
      return `<html ${attrs}>\n\t${head}\n\t${body}\n</html>\n`;
    }
  }

}

module.exports = Page;
