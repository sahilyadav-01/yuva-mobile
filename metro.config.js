const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const fs = require('fs');

// Gradle may use a short SUBST path on Windows to keep CMake paths below its
// limit. Metro must still use the canonical path or it sees dependencies as
// being outside the watched project root and cannot calculate their hashes.
const projectRoot = fs.realpathSync(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), {
  projectRoot,
  ...config,
});
