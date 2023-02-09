module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'linebreak-style': ['off', 'windows'],
    'func-names': 'off',
    'prefer-spread': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    // "@typescript-eslint/no-this-alias": ["off"],
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-trailing-spaces': 0,
    // 两空格
    indent: [
      'error',
      2,
      { SwitchCase: 1 },
    ],
    // 强制单引号
    quotes: [
      'error',
      'single',
    ],
    // 分号
    semi: [
      'error',
      'always',
    ],
    // 在逗号后需要一个或多个空格
    'comma-spacing': [
      'error',
      {
        after: true,
      },
    ],
    'block-spacing': [
      'error',
      'never',
    ],
    'brace-style': [
      'error',
      '1tbs',
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'space-infix-ops': ['error', { int32Hint: true }],
    'space-before-function-paren': [
      'error',
      // {
      //   anonymous: 'ignore',
      //   named: 'never',
      //   asyncArrow: 'always'
      // },
      'always',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'no-console': 'off',
    'no-unreachable': 'off',
    'no-use-before-define': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'off',
    'no-fallthrough': ['error', { commentPattern: 'break[\\s\\w]*omitted' }],
    eqeqeq: 'off',
  },
};
