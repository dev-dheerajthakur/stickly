import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import indexStyles from "@/src/styles/tabs/index.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Neomorph } from "react-native-neomorph-shadows";
import { Shadow } from "react-native-shadow-2";

export default function index() {
  const styles = indexStyles();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E0E0",
      }}
    >
      <Shadow
        distance={10}
        startColor={"#00000020"}
        endColor={"#00000000"}
        offset={[6, 6]}
        style={{
          borderRadius: 20,
          backgroundColor: "#E0E0E0",
          width: 150,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Outset</Text>
      </Shadow>
      <Shadow
        distance={10}
        startColor={"#00000020"}
        endColor={"#00000000"}
        offset={[6, 6]}
        style={{
          borderRadius: 20,
          backgroundColor: "#E0E0E0",
          width: 150,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Outset</Text>
      </Shadow>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.neumorphicBox}>
        <Text style={{ fontWeight: "bold" }}>Neo</Text>
      </View>

      {/* <Neomorph
          inner // 👈 this makes it "inset" shadow
          style={{
            shadowRadius: 6,
            borderRadius: 10,
            backgroundColor: "#e0e0e0",
            width: 150,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#333" }}>Neo Button</Text>
        </Neomorph> */}
      {/* <LinearGradient colors={["#FF6B6B", "#FFD93D"]} style={styles.gradient}>
        <Text style={styles.title}>Welcome to the App</Text>

      </LinearGradient> */}
    </View>
  );
}
