import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function searchBarIconStyles() {
  const { g, theme } = stylesHook({})
  return StyleSheet.create({
    searchBar: {
      backgroundColor: g[theme].backgroundDarker,
      borderRadius: 50,
      padding: 12,
      paddingHorizontal: 20,
      elevation: 2,
      color: g[theme].text,
      marginTop: 10
    }
  })
}