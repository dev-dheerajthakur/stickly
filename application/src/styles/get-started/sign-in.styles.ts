import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function signInStyles() {
  const { theme, screenDimensions, g } = stylesHook({});

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
    },
    subContainer: {
      padding: 20,
      backgroundColor: g[theme].bg2,
    },
    textInput: {
      // backgroundColor: g[theme].bg2,
      padding: 15,
      borderRadius: 10,
      color: g[theme].bg10,
      fontSize: 18,
      borderColor: g[theme].bg7,
      borderWidth: 1,
    },
    label: {
      color: g[theme].bg7,
      fontWeight: "700",
      fontSize: 20,
      marginTop: 20,
      marginBottom: 10,
    },
    btn: {
      backgroundColor: g[theme].bg9,
      padding: 20,
      borderRadius: 10,
      textAlign: "center",
      color: g[theme].bg1,
      fontSize: 20,
      fontWeight: "500",
      marginTop: 30,
    },
    chatContainer: {
      padding: 25,
      flex: 1,
      justifyContent: "space-evenly",
      // backgroundColor: g.yellow,
    },
    chats: {
      borderRadius: 10,
      padding: 10,
      maxWidth: screenDimensions.width * 0.7,
      minWidth: screenDimensions.width * 0.3,
      marginBottom: 20,
      borderWidth: 1,
    },
    title: {
      color: g[theme].bg9,
      fontSize: 35,
      fontWeight: "700",
      marginBottom: 10,
    },

    chatText: { fontSize: 20, fontWeight: "600" },
    incomingChat: {
      alignSelf: "flex-start",
      backgroundColor: g.dark.bg2,
      borderTopRightRadius: 0,
    },
    outGoingChat: {
      alignSelf: "flex-end",
      backgroundColor: g.skyBlue,
      borderTopLeftRadius: 0,
    },
  });
}
