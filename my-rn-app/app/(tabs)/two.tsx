import React, { useState } from 'react';
import { StyleSheet, Modal, View as RNView, TextInput, Button, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';

import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);

  const handleSave = () => {
    setModalVisible(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleExpoWebBrowser = async () => {
    await WebBrowser.openBrowserAsync('https://mern-ecommerce-ui.onrender.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.infoParagraph}>
        This page contains example components for testing.
      </Text>
      <Button title="Modal" onPress={() => setModalVisible(true)} />
      <View style={{ height: 12 }} />
      <Button title="expoExternalWebBrowserCall" onPress={handleExpoWebBrowser} />
      <View style={{ height: 12 }} />
      <Button title="Fake Auth WebView" onPress={() => setWebViewVisible(true)} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancel}
      >
        <RNView style={styles.modalContainer}>
          <RNView style={styles.form}>
            <Text style={styles.formTitle}>Enter your email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <RNView style={styles.buttonRow}>
              <Button title="Save" onPress={handleSave} />
              <View style={styles.buttonSpacer} />
              <Button title="Cancel" onPress={handleCancel} color="#888" />
            </RNView>
          </RNView>
        </RNView>
      </Modal>
      {showSuccess && (
        <Text style={styles.successMsg}>Saved successfully</Text>
      )}
      <Modal
        visible={webViewVisible}
        animationType="slide"
        onRequestClose={() => setWebViewVisible(false)}
      >
        <RNView style={styles.webViewContainer}>
          <WebView
            source={{ uri: 'http://localhost:3000/fake-auth-webview.html' }}
            style={{ width: 320, height: 400, borderRadius: 12, overflow: 'hidden' }}
            originWhitelist={["*"]}
            javaScriptEnabled
            domStorageEnabled
          />
          <Button title="Close" onPress={() => setWebViewVisible(false)} />
        </RNView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonSpacer: {
    width: 16,
  },
  successMsg: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoParagraph: {
    fontSize: 15,
    color: '#444',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  webViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
