'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Script extends AsyncObject {
  constructor (src, attrs) {
    super(src, attrs)
  }

  syncCall () {
    return (src, attrs) => {
      return `<script src="${src}" ${attrs}></script>`
    }
  }
}

module.exports = Script
