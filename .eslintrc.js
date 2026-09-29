module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    jest: true,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
};
