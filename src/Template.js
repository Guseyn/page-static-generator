'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { ReadDataByPath } = require('@cuties/fs');

class Template extends ReadDataByPath {

  constructor(path, options) {
    super(path, options || {
      encoding: 'utf8'
    });
  }

}

module.exports = Template;
