import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Chat from '../components/Chat';
import stylesHook from '../hook/styles.hook';
import ChatScreen from '../components/ChatScreen';

export default function About() {
  const { g, theme } = stylesHook({});
  const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: g[theme].background
    },
  });
  return (
    <View style={styles.safeAreaContainer}>
      <Header name="Dheeraj Thakur" status="typing...." />
      <Chat />
      {/* <ChatScreen /> */}
    </View>
  );
}

