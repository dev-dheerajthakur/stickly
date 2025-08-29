import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import headerStyle from "./styles/header.css";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import stylesHook from "@/src/hooks/styles.hook";
import navigateBack from "@/src/hooks/navigate-back";

interface header {
  name: string;
  status: string;
}

export default function Header({ name, status = "offline" }: header) {
  const styles = headerStyle();
  const { g, theme } = stylesHook({});

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.backButton,
          pressed && { opacity: 0.5 },
        ]}
        onPress={navigateBack}
      >
        <MaterialIcons name="arrow-back" size={25} color={g.secondaryColour} />
      </Pressable>
      <View style={styles.userInfoSection}>
        <Image
          source={{ uri: "https://picsum.photos/seed/picsum/200/200" }}
          style={styles.userPic}
        />
        <View style={styles.userStatus}>
          <Text style={[styles.text, styles.userName]}>{name}</Text>
          <Text
            style={[
              styles.text,
              { color: status === "typing...." ? "#e0bb18ff" : g[theme].text },
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
      <View style={styles.callButton}>
        <MaterialIcons name="phone" size={25} color={g.secondaryColour} />
      </View>
    </View>
  );
}
