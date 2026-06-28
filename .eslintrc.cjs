module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
