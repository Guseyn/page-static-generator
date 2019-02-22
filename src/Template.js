'use strict'

const { ReadDataByPath } = require('@cuties/fs')

class Template extends ReadDataByPath {
  constructor (path, options) {
    super(path, options || {
      encoding: 'utf8'
    })
  }
}

module.exports = Template
