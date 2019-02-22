'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Style extends AsyncObject {
  constructor (href, attrs) {
    super(href, attrs)
  }

  syncCall () {
    return (href, attrs) => {
      return `<link rel="stylesheet" href="${href}" ${attrs}>`
    }
  }
}

module.exports = Style
