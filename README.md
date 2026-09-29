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

The Android application targets API 36, supports API 24 and newer, and uses React Native 0.87's 16 KB page-size-compatible native runtime. The legacy React Native New Architecture remains disabled until all application flows and native integrations have completed compatibility testing.

On Windows, Android builds must run from project and Android SDK paths that contain no spaces. If either path contains spaces, mount them temporarily using drive letters before invoking Gradle:

```powershell
subst Y: "C:\path with spaces\yuva-mobile"
subst Z: "C:\path with spaces\Android\Sdk"
$env:ANDROID_HOME = 'Z:\'
$env:ANDROID_SDK_ROOT = 'Z:\'
Set-Location Y:\android
.\gradlew.bat app:assembleDebug
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
