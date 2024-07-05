
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const astroPlugin = require('eslint-plugin-astro');

module.exports = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs['flat/recommended'],
  {
    ignores: ['dist', 'eslint.config.cjs', 'prettier.config.cjs']
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroPlugin.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    // You can add Astro-specific rules here if needed
    rules: {
      // For example:
      // "astro/no-set-html-directive": "error"
    },
  },
];