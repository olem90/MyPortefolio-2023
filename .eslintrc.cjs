module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', 
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier', 
  ],
  rules: {
    
    'no-unused-vars': 'warn', 
    'no-console': 'off', 
    'prettier/prettier': 'error', 

    'react/prop-types': 'off', 
    'react/react-in-jsx-scope': 'off',

  },
  settings: {
    react: {
      version: 'detect', 
    },
  },
};