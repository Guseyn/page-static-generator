'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Link extends AsyncObject {
  constructor (attrs) {
    super(attrs)
  }

  syncCall () {
    return (attrs) => {
      return `<link ${attrs}>`
    }
  }
}

module.exports = Link
