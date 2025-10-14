import { StyleSheet } from "react-native";
import React from "react";
import LinearGradient from "@/src/components/reusable/LinearGradient";
import Header from "@/src/components/oneToone-chat/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Chat from "@/src/components/oneToone-chat/Chat";
export default function oneToOneChat() {
  return (
    <LinearGradient>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header name="Dheeraj Thakur" status="typing...." />
        <Chat />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    padding: 10,
  },
});
