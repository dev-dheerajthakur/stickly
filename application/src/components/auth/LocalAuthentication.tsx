// AuthGate.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function LocalAuthenticationGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    authenticate();
  }, []);

  async function authenticate() {
    setError(null);

    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      setError("Device does not support authentication");
      return;
    }

    const enrolled = await LocalAuthentication.isEnrolledAsync();
    if (!enrolled) {
      setError("No screen lock or biometrics found on device");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Unlock Stickly",
      fallbackLabel: "Use Passcode",
      disableDeviceFallback: false,
      cancelLabel: "Cancel",
      requireConfirmation: true
    });

    if (result.success) {
      setIsAuthenticated(true);
    } else {
      setError("Authentication failed");
    }
  }

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{error ?? "Please authenticate"}</Text>
        <Button title="Try Again" onPress={authenticate} />
      </View>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  text: { color: "#fff", marginBottom: 10, fontSize: 16 },
});
