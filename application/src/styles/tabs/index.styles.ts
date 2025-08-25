import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function indexStyles() {
  const { theme, screenDimensions, g } = stylesHook({});
  return StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: g[theme].bg10,

      backgroundColor: "#E0E0E0",
    },
    neumorphicBox: {
      width: 120,
      height: 120,
      borderRadius: 20,
      backgroundColor: "#E0E0E0",

      shadowColor: "#fff",
      shadowOffset: { width: -6, height: -6 },
      shadowOpacity: 1,
      shadowRadius: 6,

      elevation: 6, // Android
    },
    gradient: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      // color: g[theme].text,
    },
  });
}
