import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import LinearGradient from "@/src/components/reusable/LinearGradient";
import Header from "@/src/components/oneToone-chat/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Chat from "@/src/components/oneToone-chat/Chat";

export default function oneToOneChat() {
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
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
