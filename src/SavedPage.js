'use strict'

const { WrittenFile } = require('@cuties/fs')

// Represented result is file(as path)
class SavedPage extends WrittenFile {
  constructor (path, page) {
    super(path, page)
  }
}

module.exports = SavedPage
