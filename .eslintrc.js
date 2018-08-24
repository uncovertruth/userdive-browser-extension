module.exports = {
  "parser": "typescript-eslint-parser",
  extends: ['@uncovertruth/eslint-config'],
  plugins: ['jest'],
  env: {
    node: true,
    'jest/globals': true
  },
  globals: {
    chrome: true
  }
}
