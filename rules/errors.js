module.exports = {
  rules: {
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'func-names': 'warn',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-bitwise': 'error',
    'no-console': 'warn',
    'no-var': 'error',
    'no-void': 'error',
    'no-useless-return': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-plusplus': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'error',
      {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false
      }
    ],
    'require-await': 'off',
    'yoda': 'error'
  }
};
