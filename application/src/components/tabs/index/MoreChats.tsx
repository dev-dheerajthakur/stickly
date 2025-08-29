import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moreChatsStyles from "./more-chats.css";
import stylesHook from "@/src/hooks/styles.hook";

export default function MoreChats() {
  const styles = moreChatsStyles();
  const { g, theme } = stylesHook({});
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: g[theme].backgroundDark },
      ]}
    >
      <Text style={{ color: g[theme].textLighter, fontSize: 44, fontWeight: 700 }}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
