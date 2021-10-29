module.exports = {
  plugins: ['prettier'],
  extends: [
    'prettier',
    './rules/errors.js',
    './rules/style.js',
    './rules/variables.js'
  ]
};
