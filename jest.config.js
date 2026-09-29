module.exports = {
  preset: '@react-native/jest-preset',
  resolver: 'react-native-reanimated/jest/resolver.js',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|react-native-gesture-handler|react-native-reanimated)/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.rn87-template/',
    '<rootDir>/.node_modules-rn069-backup/',
    '<rootDir>/.node_modules-rn069-longpaths/',
  ],
};
