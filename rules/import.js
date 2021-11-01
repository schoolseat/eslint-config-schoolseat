module.exports = {
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json']
      }
    },
    'import/extensions': ['.mjs', '.js', '.ts']
  },
  rules: {
    'import/default': 'off',
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'error',
    'import/no-default-export': 'off',
    'import/no-self-import': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-deprecated': 'off',
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object'
        ]
      }
    ],
    'import/prefer-default-export': 'off'
  }
};
