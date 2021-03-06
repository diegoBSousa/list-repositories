module.exports = {
  env: {
    browser: true,
    //es2021: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn', {
        extensions: [
          '.jsx',
          '.js'
        ]
      }
    ],
    'import/prefer-default-export': 'off'
  },
};
