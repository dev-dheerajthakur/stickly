import { ColorValue, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import indexStyles from "@/src/styles/tabs/index.styles";
import stylesHook from "@/src/hooks/styles.hook";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/tabs/index/Header";
import SeachBar from "@/src/components/tabs/index/SeachBar";
import Chats from "@/src/components/tabs/index/Chats";
import MoreChats from "@/src/components/tabs/index/MoreChats";
import LinearGradient from "@/src/components/reusable/LinearGradient";

export default function index() {
  const styles = indexStyles();
  const { theme, g } = stylesHook({});
  const color: readonly [ColorValue, ColorValue, ...ColorValue[]] = [
    g[theme].backgroundLight,
    g[theme].backgroundDark,
  ];

  return (
    <LinearGradient>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header title="Messages" />
        <SeachBar />
        <Chats />
        <MoreChats />
      </SafeAreaView>
    </LinearGradient>
  );
}
