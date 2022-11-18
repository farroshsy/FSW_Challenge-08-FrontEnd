module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
        "strict": 0,
        "react/no-unescaped-entities": 0,
          "react/prop-types": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
