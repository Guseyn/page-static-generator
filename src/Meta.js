'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Meta extends AsyncObject {
  constructor (attrs) {
    super(attrs)
  }

  syncCall () {
    return (attrs) => {
      return `<meta ${attrs}>`
    }
  }
}

module.exports = Meta
