import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function indexStyles() {
  const { theme, screenDimensions, g } = stylesHook({});
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E0E0E0",
    },
    text: {
      color: g[theme].text,
    },
    safeAreaContainer: {
      paddingHorizontal: 16,
      paddingTop: 12,
      flex: 1,
    },
    scrollViewContainer: {
      flex: 1,
    }
  });
}
