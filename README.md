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

## Example WebView Interaction (Tab Two)

Tab Two contains an example of interacting with a WebView using a local static HTML file served from a local server. This is useful for testing WebView integration and message passing in a React Native/Expo app.

### How to use the local WebView example

1. **Install dependencies**

   From the `my-rn-app` directory, run:
   ```sh
   yarn install
   ```

2. **Start the local server**

   From the `my-rn-app` directory, run:
   ```sh
   npx serve assets
   ```
   This will serve files from the `assets` directory at `http://localhost:3000/` by default.

3. **Open the app and use Tab Two**

   - Press the "Fake Auth WebView" button to open the local HTML page in a WebView modal.
   - The page simulates an authentication flow and can send a message back to the app.

**Note:**
- If you are testing on a real device, replace `localhost` with your computer's LAN IP address (e.g., `http://192.168.1.100:3000/fake-auth-webview.html`).
- Make sure your device and computer are on the same network.

All dependencies for this feature are now managed in `my-rn-app/package.json`.