module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended', 'eslint:recommended', 'prettier/vue'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'vue/html-self-closing': 0,
    'singleline-html-element-content-newline': 0,
  },
};
