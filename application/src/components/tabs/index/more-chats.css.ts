import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function moreChatsStyles() {
  const { g, theme } = stylesHook({})
  return StyleSheet.create({
    container: {
      height: 70,
      width: 70,
      backgroundColor: g[theme].backgroundLight,
      position: 'absolute',
      bottom: 70,
      right: 20,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
}
