/*
 * @LastEditors: isboyjc
 * @Description: ...
 * @Date: 2022-09-17 14:35:02
 * @LastEditTime: 2022-09-22 01:22:28
 * @Author: isboyjc
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    "./.eslintrc-auto-import.json",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    semi: ["warn", "never"], // 禁止尾部使用分号
    "no-debugger": "warn", // 禁止出现debugger
  },
}
