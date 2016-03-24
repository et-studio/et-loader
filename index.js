'use strict'

let loaderUtils = require('loader-utils')
let ET = require('et-template')

module.exports = function (content) {
  if (this.cacheable) this.cacheable()

  let options = loaderUtils.parseQuery(this.query)
  let et = new ET(options)
  return et.compile(content, options)
}
