import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function chatItemStyle() {
  const { g, theme } = stylesHook({})
  return StyleSheet.create({
    chatItem: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: g.secondaryColour,
      marginBottom: 10,
      borderRadius: 10,
    },
    primary: {
      alignSelf: 'flex-end'
    },
    secoundary: {
      alignSelf: 'flex-start'
    }
  })
}