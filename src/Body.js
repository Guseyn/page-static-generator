'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Body extends AsyncObject {
  constructor (attrs, ...elms) {
    super(attrs, ...elms)
  }

  syncCall () {
    return (attrs, ...elms) => {
      return `<body ${attrs}>${elms.join('')}</body>`
    }
  }
}

module.exports = Body
