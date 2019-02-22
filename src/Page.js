'use strict'

const { AsyncObject } = require('@cuties/cutie')

// attrs - string like 'lang="en"'
class Page extends AsyncObject {
  constructor (attrs, head, body) {
    super(attrs, head, body)
  }

  syncCall () {
    return (attrs, head, body) => {
      return `<!DOCTYPE html>\n<html ${attrs}>${head}${body}</html>\n`
    }
  }
}

module.exports = Page
