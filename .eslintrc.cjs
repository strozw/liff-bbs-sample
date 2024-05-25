/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:perfectionist/recommended-natural',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@stylistic'],
  root: true,
  rules: {
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'function',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'if',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'block',
        prev: '*',
      },
    ],
    'import/order': 'error',
    'perfectionist/sort-imports': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
};
