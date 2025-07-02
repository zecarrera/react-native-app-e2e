# End-to-End Testing with Appium

This folder contains end-to-end (E2E) tests for the React Native app, using [Appium](https://appium.io/) to automate interactions and verify app behavior.

## Technologies Used

- **Appium**: Main automation framework for running E2E tests on mobile devices.
- **WebdriverIO**: Used as the test runner and assertion library.
- **Appium WebdriverIO Service**: Integrates Appium with WebdriverIO for streamlined test execution.

## Folder Structure

```
e2e/
├── specs/         # Test specifications
├── helpers/       # Utility functions and custom commands
├── config/        # Appium and WebdriverIO configuration files
└── README.md      # This documentation
```

## Building the App

Before running tests, you need to build the app and generate the APK.

### Android

```sh
npx expo prebuild
cd android
./gradlew assembleRelease
```

This will generate the **release APK** required for testing at:

```
android/app/build/outputs/apk/release/app-release.apk
```

## Running the Tests on Android

After building the debug APK, you can run the E2E tests with the following steps, each in a separate terminal:

1. **Build the debug APK:**
   ```sh
   yarn e2e:build-debug
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn e2e:metro
   ```
3. **Start the emulator (if not already running):**
   ```sh
   yarn e2e:emulator
   ```
4. **Run your e2e tests:**
   ```sh
   yarn e2e:test
   ```

> **Note:**
> - You must have an Android emulator already created (e.g., via Android Studio AVD Manager).
> - The emulator name in the script (currently `Pixel_9a`) must match your actual AVD name. You can list available emulators with:
>   ```sh
>   emulator -list-avds
>   ```
> - For Expo managed workflow, always use the debug APK and keep Metro running during tests.