import { ColorValue, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

interface LoadingLottieProps {
  size?: number;
  backgroundColor?: ColorValue;
  animate: boolean
}

export default function LoadingLottie({ size = 150, backgroundColor = "transparent", animate }: LoadingLottieProps) {
  return (
    <View style={[styles.container, { backgroundColor, display: animate ? 'flex' : 'none' }]}>
      <LottieView
        source={require("./../../assets/lottie/loading_gray.json")}
        autoPlay
        loop
        style={styles.lottieView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
  lottieView: {
    width: 150,
    height: 150,
    backgroundColor: "transparent",
  },
});
