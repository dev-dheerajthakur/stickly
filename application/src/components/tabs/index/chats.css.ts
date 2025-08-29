import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function chatsStyles() {
  const { theme, g } = stylesHook({});
  return StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: g[theme].background,
    },
    text: {
      color: g[theme].text,
    },
    chatItem: {
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    chatAvatar: {
      height: 55,
      width: 55,
      borderRadius: 100,
      borderColor: g.secondaryColour,
      borderWidth: 4,
      marginRight: 25,
    },
    chatSender: {
      fontWeight: "bold",
      color: g[theme].text,
      fontSize: 18,
    },
    chatContent: {
      flex: 1,
      overflow: 'hidden',
    },
    chatTime: {
      marginLeft: 12,
    },
    chatMessage: {
      color: g[theme].textLighter,
      marginTop: 3,
    },
    messageTimeStamp: {
      color: g.secondaryColour,
      fontWeight: 600,
    },
    messageCounter: {
      height: 23,
      width: 23,
      backgroundColor: g.secondaryColour,
      borderRadius: 8,
      fontWeight: 700,
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginTop: 5,
    },
    pressable:{
      flex: 1,
      flexDirection: "row",
    }
  });
}
