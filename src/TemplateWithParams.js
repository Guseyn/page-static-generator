'use strict'

const { AsyncObject } = require('@cuties/cutie')

class TemplateWithParams extends AsyncObject {
  constructor (template, ...params) {
    super(template, ...params)
  }

  syncCall () {
    return (template, ...params) => {
      let curParamNum = -1
      return template
        .replace(/\{([^{}\\]*?)\}/gm, (match) => {
          curParamNum += 1
          return params[curParamNum]
        })
        .replace(/(\\{|\\})/gm, (match, p1) => {
          return p1[1]
        })
    }
  }
}

module.exports = TemplateWithParams
