import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import headerStyles from "./header.css";

interface HeaderProps {
  title?: string;
  userImage?: string;
}

export default function Header({
  title = "Stickly",
  userImage = "https://picsum.photos/seed/picsum/200/200",
}: HeaderProps) {
  const styles = headerStyles();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.headline]}>{title}</Text>
      <Pressable
        style={styles.userIcon}
        onPress={() => {
          alert("Profile");
        }}
      >
        <Image source={{ uri: userImage }} style={styles.userImage} />
      </Pressable>
    </View>
  );
}
