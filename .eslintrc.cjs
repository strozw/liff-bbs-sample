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
  plugins: ['@stylistic', 'simple-import-sort'],
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

    // `import` と `import type` を分ける
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],

    // `eslint-plugin-import` よりも、広範囲かつ望ましいソートが可能な
    // `import type` を同一パスの `import` の上に配置する
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'perfectionist/sort-imports': 'off',

    'simple-import-sort/exports': 'error',

    // `eslint-plugin-simple-import-sort` で勧められている設定を指定
    'simple-import-sort/imports': 'error',
  },
};
