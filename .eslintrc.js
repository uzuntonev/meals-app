module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'linebreak-style': ['off', 'unix'],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-unused-vars': [
      'off',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'global-require': ['off'],
    'react/prop-types': ['off'],
    'import/prefer-default-export': ['off'],
    'default-param-last': ['off'],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: true,
            jsxSingleQuote: true,
            trailingComma: 'es5',
            bracketSpacing: true,
            bracketSameLine: true,
            arrowParens: 'always',
            endOfLine: 'auto',
          },
          {
            usePrettierrc: false,
          },
        ],
      },
    },
  ],
};
