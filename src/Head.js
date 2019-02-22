'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Head extends AsyncObject {
  constructor (...elms) {
    super(...elms)
  }

  syncCall () {
    return (...elms) => {
      return `<head>${elms.join('')}</head>`
    }
  }
}

module.exports = Head
