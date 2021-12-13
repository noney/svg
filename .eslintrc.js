module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  globals: {
    getApp: 'readonly',
    getCurrentPages: 'readonly',
    wx: 'readonly',
    uni: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    // 花括号前后有空格
    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: true }
    ],
    // 逗号后有空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 关键字前后有空格
    'keyword-spacing': ['error', { before: true, after: true }],
    // 语句块之前有空格
    'space-before-blocks': ['error', 'always'],
    // 操作符周围有空格
    'space-infix-ops': ['error'],
    // 注释有空格
    'spaced-comment': ['error', 'always'],
    // 箭头函数前后有空格
    'arrow-spacing': ['error', { before: true, after: true }],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
};