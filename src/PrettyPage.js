'use strict'

const { AsyncObject } = require('@cuties/cutie')
const pretty = require('pretty')

class PrettyPage extends AsyncObject {
  constructor (page) {
    super(page)
  }

  syncCall () {
    return (page) => {
      return pretty(page) + '\n'
    }
  }
}

module.exports = PrettyPage
