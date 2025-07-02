# End-to-End Testing with Appium

This folder contains end-to-end (E2E) tests for the React Native app, using [Appium](https://appium.io/) to automate interactions and verify app behavior.

## Technologies Used

- **Appium**: Main automation framework for running E2E tests on mobile devices.
- **WebdriverIO**: Used as the test runner and assertion library.
- **Appium WebdriverIO Service**: Integrates Appium with WebdriverIO for streamlined test execution.

## Running the Tests on Android

After building the debug APK, you can run the E2E tests with the following steps, each in a separate terminal:

1. **Build the debug APK:**
   ```sh
   yarn e2e:build-android
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn run e2e:start:metro
   ```
3. **Start the Android emulator (if not already running):**
   ```sh
   yarn e2e:emulator-android
   ```
4. **Run your e2e tests:**
   ```sh
   yarn e2e:test:android
   ```

---

## Running the Tests on iOS

After building the iOS app for the simulator, you can run the E2E tests with the following steps, each in a separate terminal:

1. **Build the iOS app for simulator:**
   ```sh
   yarn e2e:build-ios
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn run e2e:start:metro
   ```
3. **Start the iOS simulator (if not already running):**
   ```sh
   yarn e2e:simulator-ios
   ```
4. **Run your e2e tests:**
   ```sh
   yarn e2e:test:ios
   ```

> **Environment Setup:**
> - Make sure the `ANDROID_SDK_ROOT` environment variable is set to your Android SDK location. For example:
>   ```sh
>   export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
>   ```
>   Add this to your shell profile (e.g., `.zshrc` or `.bash_profile`) for persistence.
> - You must have an Android emulator or iOS simulator already created (e.g., via Android Studio AVD Manager or Xcode > Devices & Simulators).
> - The emulator/simulator names in the scripts (currently `Pixel_9a` and `iPhone 16 Pro`) must match your actual device names. You can list available devices with:
>   ```sh
>   emulator -list-avds
>   xcrun simctl list devices
>   ```
> - For Expo managed workflow, always use the debug build and keep Metro running during tests.