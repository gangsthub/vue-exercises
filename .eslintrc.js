module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    serviceworker: true,
    node: true,
  },
  extends: ['standard'],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", 4],
    "no-trailing-spaces": "error",
    "semi": ["error", "always"],
    "no-extra-semi": 2,
    "comma-dangle": ["error", {
      "arrays": "ignore",
      "objects": "ignore",
      "imports": "ignore",
      "exports": "ignore",
      "functions": "ignore"
    }],
    "space-before-function-paren": ["error", "never"],
    "no-debugger": "error",
  },
  globals: {}
}
