import { StyleSheet } from "react-native";
import stylesHook from "../../hook/styles.hook";

export default function headerStyle() {
  const { g, theme } = stylesHook({})
  return StyleSheet.create({
    container: {
      height: 50,
      flexDirection: "row",
      // backgroundColor: '#ffffff79',
      alignItems: "center"
    },
    backButton: {
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
      backgroundColor: g[theme].backgroundDarker,
      borderRadius: 100
    },
    userInfoSection: {
      marginLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    userPic: {
      height: 50,
      width: 50,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: g.secondaryColour
    },
    userStatus: {
      marginLeft: 20
    },
    text: {
      color: g[theme].text
    },
    userName: {
      fontSize: 20,
      fontWeight: 500,
      marginBottom: 4
    },
    callButton: {
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 50,
      backgroundColor: g[theme].backgroundDarker,
      borderRadius: 100
    }
  })
}