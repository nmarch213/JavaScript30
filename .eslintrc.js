module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': 0,
  },
  env: {
    browser: true,
  },
}
