# react-native-app-e2e

This is a PDT project for creating a React Native app that runs on Android, iOS, and web using Expo.

This project is used to assist in evaluating end-to-end (E2E) test tools such as Playwright, Detox, and Appium.

## Features

- Simple login form with validation and logout
- Cross-platform: Android, iOS, and web support

## Main Technologies Used

- **[React Native](https://reactnative.dev/)**: Build native mobile apps using JavaScript and React.
- **[Expo](https://expo.dev/)**: Tools and services for building, deploying, and iterating on React Native apps.

## Project Structure

- `app/` – Main application code (screens, components)
- `package.json` – Project dependencies and scripts
- `README.md` – Project documentation

## Getting Started

1. **Install dependencies**

   Using Yarn:
   ```sh
   yarn install
   ```

2. **Start the development server**

   Using the new Expo CLI:
   ```sh
   yarn start
   ```
   This will open the Expo Dev Tools in your browser.

3. **Run on your device or emulator**
   - For Android: Press `a` in the terminal or click "Run on Android device/emulator" in Expo Dev Tools.
   - For iOS: Press `i` in the terminal or click "Run on iOS simulator" (macOS only).
     - If the above does not work run: `npx expo run:ios`
   - For Web: Press `w` in the terminal or click "Run in web browser".

   #### Pre-conditions for Emulators
   - To use the Android emulator, install [Android Studio](https://developer.android.com/studio) and set up an Android Virtual Device (AVD).
   - To use the iOS simulator, install [Xcode](https://developer.apple.com/xcode/) (macOS only).