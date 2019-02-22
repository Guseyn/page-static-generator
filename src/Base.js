'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Base extends AsyncObject {
  constructor (href, attrs) {
    super(href, attrs)
  }

  syncCall () {
    return (href, attrs) => {
      return `<base href=${href} ${attrs}>`
    }
  }
}

module.exports = Base
