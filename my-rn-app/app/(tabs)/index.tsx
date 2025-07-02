import { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
    } else if (password.length < 5) {
      setError('Password must be at least 5 characters long.');
    } else {
      setError('');
      setSuccess(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {success ? (
        <>
          <Text style={styles.success} testID="successMessage" accessibilityLabel="successMessage">Login successful!</Text>
          <Button
            title="Logout"
            onPress={() => {
              setSuccess(false);
              setEmail('');
              setPassword('');
              setError('');
            }}
          />
        </>
      ) : (
        <>
          <TextInput
            testID="emailInput"
            accessibilityLabel="emailInput"
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            testID="passwordInput"
            accessibilityLabel="passwordInput"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Button title="Login" onPress={handleLogin} testID="loginButton" accessibilityLabel="loginButton" />
        </>
      )}
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  success: {
    color: 'green',
    fontSize: 18,
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
