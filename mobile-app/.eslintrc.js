module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'on',
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "always",
      "exports": "always",
      "export": "always",
      "functions": "never"
    }]
  },
  'globals': {
    "fetch": false
  }
}