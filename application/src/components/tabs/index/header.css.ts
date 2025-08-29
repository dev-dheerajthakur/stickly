import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function headerStyles() {
  const { theme, g } = stylesHook({});
  return StyleSheet.create({
    container: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userIcon: {
      borderRadius: 100,
      borderWidth: 4,
      height: 40,
      width: 40,
      borderColor: g.secondaryColour,
    },
    userImage: {
      height: "100%",
      width: "100%",
      borderRadius: 100,
      // borderWidth: 5,
    },
    text: {
      color: g[theme].text,
    },
    headline: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: 1.4,
      marginLeft: 10
    },
  });
}
