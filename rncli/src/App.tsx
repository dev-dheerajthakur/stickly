import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const Stack = createNativeStackNavigator<rootStackParamList>();

export default function App() {
  return (
    <KeyboardProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* <SafeAreaView style={{ flex: 1 }}>
      </SafeAreaView> */}
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({});
