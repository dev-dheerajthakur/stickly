import { ColorValue, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import stylesHook from "@/src/hooks/styles.hook";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";

interface LinearGradientProps {
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

export default function LinearGradient({ children, styles }: LinearGradientProps) {
  const { g, theme } = stylesHook({});
  const color: readonly [ColorValue, ColorValue, ...ColorValue[]] = [
    g[theme].backgroundLight,
    g[theme].backgroundDark,
  ];

  return (
    <ExpoLinearGradient colors={color} style={[{ flex: 1 }, styles]}>
      {children}
    </ExpoLinearGradient>
  );
}
