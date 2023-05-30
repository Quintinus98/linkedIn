module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports": [
    "warn",
    {
      "name": "react-redux",
      "importNames": ["useSelector", "useDispatch"],
      "message": "Use typed hooks `useAppDispatch` and `useAppSelector` instead."
    }
  ],
}
