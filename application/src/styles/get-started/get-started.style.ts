import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function getStartedStyles() {
  const { theme, screenDimensions, g } = stylesHook({
    screenDimensionType: "window",
  });

  return StyleSheet.create({
    container: {
      backgroundColor: g[theme].bg10,
      flex: 1,
      justifyContent: "space-between",
    },
    text: {
      color: g[theme].bg2,
    },
    subContainer: {
      backgroundColor: g[theme].bg2,
      //   height: 300,
      padding: 20,
    },
    button: {
      backgroundColor: g[theme].bg8,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    chatContainer: {
      padding: 25,
      flex: 1,
      justifyContent: "space-evenly",
    },
    chats: {
      borderRadius: 10,
      padding: 10,
      maxWidth: screenDimensions.width * 0.7,
      minWidth: screenDimensions.width * 0.3,
      marginBottom: 20,
      borderWidth: 1,
    },
  });
}
