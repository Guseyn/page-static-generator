'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Title extends AsyncObject {
  constructor (text) {
    super(text)
  }

  syncCall () {
    return (text) => {
      return `<title>${text}</title>`
    }
  }
}

module.exports = Title
