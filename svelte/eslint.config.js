import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{ts,tsx,svelte}'],
    plugins: {
      'prettier': {},
      'svelte3': {},
      'import': {},
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.svelte'],
        },
        node: {
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".svelte", ""],
        },
        typescript: {
          "alwaysTryTypes": true,
        },
      },
    },
    rules: {
      'eol-last': ['error', 'always'],
      'prettier/prettier': 'error',
      'import/no-unresolved': 'error',
    },
    overrides: [
      {
        files: ['**/*.svelte'],
        processor: 'svelte3/svelte3',
      },
    ],
  }
);
