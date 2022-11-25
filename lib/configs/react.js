const pathJoin = require('path').join
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    pathJoin(__dirname, "ts.js"),
  ],
  // extends: pathJoin(__dirname, 'ts.js'),
  settings: {
    react: {
      version: '17.0'
    }
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'react/react-in-jsx-scope': 'off'
  }
}
