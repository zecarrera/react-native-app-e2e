# Detox E2E Testing

This folder contains end-to-end (E2E) tests for the React Native app using [Detox](https://wix.github.io/Detox/) for automation.

## Technologies Used
- **Detox**: Gray-box E2E testing and automation for React Native apps.
- **Jest**: Test runner for executing Detox tests.

---

## Running the Tests on iOS

After building the iOS app for the simulator, you can run the Detox E2E tests with the following steps (each in a separate terminal):

1. **Build the iOS app for simulator:**
   ```sh
   yarn detox:build:ios
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn run e2e:start:metro
   ```
3. **Start the iOS simulator (if not already running):**
   ```sh
   yarn e2e:simulator:ios
   ```
4. **Run your Detox E2E tests:**
   ```sh
   yarn detox:test:ios
   ```

---

## Running the Tests on Android (WIP)

> **Note:** Android Detox support is still a work in progress (WIP).

The following steps are intended for future use and may not be fully functional yet:

1. **Build the Android app for emulator:**
   ```sh
   yarn detox:build:android
   ```
2. **Start Metro (JS server):**
   ```sh
   yarn run e2e:start:metro
   ```
3. **Start the Android emulator (if not already running):**
   ```sh
   yarn e2e:emulator:android
   ```
4. **Run your Detox E2E tests:**
   ```sh
   yarn detox:test:android
   ```

---

## Environment Setup
- Make sure you have all Detox and React Native dependencies installed.
- For iOS, Xcode and command line tools are required.
- For Android, Android Studio and SDK tools are required.
- Device/simulator names in scripts must match your local setup.
- See Detox documentation for troubleshooting and advanced configuration.
