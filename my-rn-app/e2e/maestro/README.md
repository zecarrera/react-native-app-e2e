# End-to-End Testing with Maestro

This folder contains end-to-end (E2E) tests for the React Native app, using [Maestro](https://maestro.mobile.dev/) to automate user flows and verify app behavior.

## What is Maestro?

**Maestro** is a modern mobile UI testing framework that allows you to write simple, readable YAML files to describe user interactions and assertions. It works with both Android and iOS apps and is designed for fast, reliable, and easy-to-maintain tests.

## Maestro Setup

Before running any tests, install the Maestro CLI (if you haven't already):

```sh
brew install maestro
# or
curl -Ls "https://get.maestro.mobile.dev" | bash
```

## Running Maestro Tests on Android

Follow these steps to run your Maestro tests locally on Android:

1. **Build the debug APK:**
   ```sh
   yarn e2e:build:android
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn run e2e:start:metro
   ```
3. **Start the Android emulator (if not already running):**
   ```sh
   yarn e2e:emulator:android
   ```
4. **Install the APK to the emulator:**
   ```sh
   adb install -r android/app/build/outputs/apk/debug/app-debug.apk
   ```
5. **Run the Maestro test:**
   ```sh
   maestro test my-rn-app/e2e/maestro/login.yaml
   ```

## Running Maestro Tests on iOS

Follow these steps to run your Maestro tests locally on iOS:

1. **Build the iOS app for simulator:**
   ```sh
   yarn e2e:build:ios
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn run e2e:start:metro
   ```
3. **Start the iOS simulator (if not already running):**
   ```sh
   yarn e2e:simulator:ios
   ```
4. **Install the app to the simulator:**
   ```sh
   xcrun simctl install booted ios/build/Build/Products/Debug-iphonesimulator/myrnapp.app
   ```
5. **Run the Maestro test:**
   ```sh
   maestro test my-rn-app/e2e/maestro/login.yaml
   ```

> **Note:** Our appId (bundle identifier) is currently the same for both Android and iOS, so the same test YAML will work for both platforms. Maestro will run the test against whichever simulator is currently running.

---

## Notes
- Make sure your appId in the YAML matches your Android app's package name and iOS bundle identifier (see `app.json` > `android.package` and `ios.bundleIdentifier`).
- You can write additional flows in YAML to cover more scenarios.
- For more info, see the [Maestro documentation](https://maestro.mobile.dev/).
