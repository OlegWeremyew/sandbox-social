import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:vue/vue3-recommended',
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{ts,tsx,js,jsx,vue}'],
    plugins: {
      'vue': {},
      'prettier': {},
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', ''],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      'eol-last': ['error', 'always'],
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
    },
  }
);
