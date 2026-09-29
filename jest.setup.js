import 'react-native-gesture-handler/jestSetup';

if (typeof global.AbortController === 'undefined') {
  global.AbortController = class AbortController {
    constructor() {
      this.signal = {
        aborted: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    }
    abort() {
      this.signal.aborted = true;
    }
  };
}

if (typeof global.fetch === 'undefined') {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
      text: () => Promise.resolve(''),
      ok: true,
      status: 200,
    })
  );
}


// Mock react-native-config
jest.mock('react-native-config', () => ({
  BASE_URL: 'https://mock.yuva.com',
}));

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock DeviceInfo
jest.mock(
  'react-native-device-info',
  () => require('react-native-device-info/jest/react-native-device-info-mock')
);

// Mock SplashScreen
jest.mock('react-native-splash-screen', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

// Mock VersionCheck
jest.mock('react-native-version-check', () => ({
  getPackageName: jest.fn(() => 'com.yuva'),
  getCurrentVersion: jest.fn(() => '1.0.0'),
  getCountry: jest.fn(() => Promise.resolve('in')),
  getLatestVersion: jest.fn(() => Promise.resolve('1.0.0')),
  needUpdate: jest.fn(() => Promise.resolve({isNeeded: false})),
  getAppStoreUrl: jest.fn(() => Promise.resolve('')),
  getPlayStoreUrl: jest.fn(() => Promise.resolve('')),
}));

// Mock Firebase Messaging
jest.mock('@react-native-firebase/messaging', () => {
  const messaging = () => ({
    getToken: jest.fn(() => Promise.resolve('mock-token')),
    hasPermission: jest.fn(() => Promise.resolve(1)),
    requestPermission: jest.fn(() => Promise.resolve(1)),
  });
  messaging.AuthorizationStatus = {
    NOT_DETERMINED: -1,
    DENIED: 0,
    AUTHORIZED: 1,
    PROVISIONAL: 2,
  };
  return messaging;
});

// Mock Freshchat
jest.mock('react-native-freshchat-sdk', () => ({
  Freshchat: {
    init: jest.fn(),
  },
  FreshchatConfig: jest.fn(),
}));

// Mock rn-fetch-blob
jest.mock('rn-fetch-blob', () => ({
  fs: {
    dirs: {
      DocumentDir: '/mock/DocumentDir',
      CacheDir: '/mock/CacheDir',
      PictureDir: '/mock/PictureDir',
      MusicDir: '/mock/MusicDir',
      MovieDir: '/mock/MovieDir',
      DownloadDir: '/mock/DownloadDir',
      DCIMDir: '/mock/DCIMDir',
      SDCardDir: '/mock/SDCardDir',
      SDCardApplicationDir: '/mock/SDCardApplicationDir',
      MainBundleDir: '/mock/MainBundleDir',
      LibraryDir: '/mock/LibraryDir',
    },
    exists: jest.fn(() => Promise.resolve(true)),
    writeFile: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve('')),
  },
  config: jest.fn(() => ({
    fetch: jest.fn(() =>
      Promise.resolve({
        info: () => ({status: 200}),
        data: '',
      })
    ),
  })),
}));

// Mock react-native-fs
jest.mock('react-native-fs', () => ({
  DocumentDirectoryPath: '/mock/DocumentDirectoryPath',
  CachesDirectoryPath: '/mock/CachesDirectoryPath',
  ExternalDirectoryPath: '/mock/ExternalDirectoryPath',
  ExternalStorageDirectoryPath: '/mock/ExternalStorageDirectoryPath',
  TemporaryDirectoryPath: '/mock/TemporaryDirectoryPath',
  LibraryDirectoryPath: '/mock/LibraryDirectoryPath',
  PicturesDirectoryPath: '/mock/PicturesDirectoryPath',
  exists: jest.fn(() => Promise.resolve(true)),
  readFile: jest.fn(() => Promise.resolve('')),
  writeFile: jest.fn(() => Promise.resolve()),
  unlink: jest.fn(() => Promise.resolve()),
  mkdir: jest.fn(() => Promise.resolve()),
  downloadFile: jest.fn(() => ({
    jobId: 1,
    promise: Promise.resolve({statusCode: 200, bytesWritten: 0}),
  })),
}));

// Mock react-native-image-crop-picker
jest.mock('react-native-image-crop-picker', () => ({
  openPicker: jest.fn(() => Promise.resolve([])),
  openCamera: jest.fn(() => Promise.resolve({})),
  openCropper: jest.fn(() => Promise.resolve({})),
  clean: jest.fn(() => Promise.resolve()),
  cleanSingle: jest.fn(() => Promise.resolve()),
}));

// Mock react-native-push-notification
jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  onRegister: jest.fn(),
  onNotification: jest.fn(),
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(),
  localNotification: jest.fn(),
}));

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// Mock @react-native-clipboard/clipboard
jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
  getString: jest.fn(() => Promise.resolve('')),
}));

// Mock react-native-document-picker
jest.mock('react-native-document-picker', () => ({
  pick: jest.fn(() => Promise.resolve([])),
  types: {},
}));

// Mock @react-native-community/geolocation
jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
}));

// Mock react-native-config
jest.mock('react-native-config', () => ({}));

// Mock react-native-webview
jest.mock('react-native-webview', () => 'WebView');
