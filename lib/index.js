/**
 * @fileoverview a lint for daodaolee
 * @author daodaolee
 */
'use strict'

module.exports = {
  rules: {
    "comments-key": require("./rules/comments-key")
  },
  configs: {
    vue: require('./configs/vue'),
    react: require('./configs/react')
  }
}
