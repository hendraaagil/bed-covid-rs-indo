module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'next', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    '@next/next/no-page-custom-font': 'off',
    'import/no-unresolved': 'off',
    'no-plusplus': 'off',
  },
};
