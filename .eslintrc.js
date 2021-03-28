module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended', 'eslint:recommended', 'prettier/vue'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.vue', '.json'],
      },
    },
  },
  rules: {
    'vue/html-self-closing': 0,
    'singleline-html-element-content-newline': 0,
  },
};
