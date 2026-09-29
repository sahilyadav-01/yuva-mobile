# Yuva Mobile

React Native mobile application for Android and iOS.

## Development requirements

- Node.js 22.11 or newer
- npm 10 or newer
- Java 17
- Android Studio with Android SDK Platform 36, Build Tools 37.0.0, and NDK 27.1.12297006
- Xcode 16 or newer and CocoaPods for iOS development

Install dependencies with `npm ci`.

## Android

The Android application targets API 36, supports API 24 and newer, and uses React Native 0.87's 16 KB page-size-compatible native runtime. React Native 0.87 requires the New Architecture, so all upgraded native packages are selected for that runtime.

On Windows, Android builds should run from project and Android SDK paths that contain no spaces. CMake and Metro resolve SUBST paths differently, so moving the checkout and SDK to short, space-free paths is the supported setup. For one-off verification from an existing path with spaces, generate the release bundle from the canonical path before packaging native code through a short drive:

```powershell
subst Y: "C:\path with spaces\yuva-mobile"
subst Z: "C:\path with spaces\Android\Sdk"
$bundleDir = 'android\app\build\generated\assets\react\release'
$resDir = 'android\app\build\generated\res\react\release'
node node_modules\react-native\cli.js bundle --platform android --dev false --entry-file index.js --bundle-output "$bundleDir\index.android.bundle" --assets-dest $resDir
# Compile the generated JavaScript with hermesc, then replace index.android.bundle with the .hbc output.
$env:ANDROID_HOME = 'Z:\'
$env:ANDROID_SDK_ROOT = 'Z:\'
$env:RN_SKIP_RELEASE_BUNDLE = 'true'
Set-Location Y:\android
.\gradlew.bat app:assembleRelease
```

Build commands:

```powershell
npm run android:debug
npm run android:release
```

Validate an APK's 16 KB zip alignment with:

```powershell
zipalign -v -c -P 16 4 android\app\build\outputs\apk\release\app-release.apk
```

## iOS

The minimum iOS version is 15.1. From macOS, run `bundle exec pod install` in `ios`, then build the workspace in Xcode.
