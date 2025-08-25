import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { g } from "@/src/constants/Colors";
import { useRouter } from "expo-router";
import getStartedStyles from "@/src/styles/get-started/get-started.style";

export default function GetStarted() {
  const router = useRouter();
  const navigateTo = (screen: "signIn" | "signUp") => {
    console.log(`Navigating to ${screen}`);
    router.navigate(`/(getStarted)/${screen}`);
  };

  const isDarkMode = useColorScheme() === "dark" ? "dark" : "light";
  const styles = getStartedStyles();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./../../src/assets/png/grid.png")}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.chatContainer}>
          <View
            style={[
              styles.chats,
              {
                alignSelf: "flex-start",
                backgroundColor: g.yellow,
                borderTopRightRadius: 0,
              },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Hola!{"\n"}Nice to hear from you.
            </Text>
          </View>
          <View
            style={[
              styles.chats,
              {
                alignSelf: "flex-end",
                backgroundColor: g[isDarkMode].bg2,
                borderTopLeftRadius: 0,
              },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              And you, too!
            </Text>
          </View>
          <View
            style={[
              styles.chats,
              {
                alignSelf: "flex-start",
                backgroundColor: g.orange,
                borderTopRightRadius: 0,
              },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Let's meet?{"\n"}🍻8 at J's?
            </Text>
          </View>
          <View
            style={[
              styles.chats,
              {
                alignSelf: "flex-end",
                backgroundColor: g.skyBlue,
                borderTopLeftRadius: 0,
              },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>👍 See you!</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: "700",
            color: g[isDarkMode].bg9,
            marginBottom: 10,
          }}
        >
          #Checked
        </Text>
        <Text style={{ fontSize: 20, color: g[isDarkMode].bg9 }}>
          Talk, text, and share as much as you
        </Text>
        <Text style={{ fontSize: 20, color: g[isDarkMode].bg9 }}>
          want - all of it for free
        </Text>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          activeOpacity={0.8}
          onPress={() => {
            navigateTo("signIn");
          }}
        >
          <View style={styles.button}>
            <Text style={[styles.text, { fontSize: 20, fontWeight: "500" }]}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 15 }}
          activeOpacity={0.4}
          onPress={() => {
            navigateTo("signIn");
          }}
        >
          <Text
            style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}
          >
            I already have an account.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
