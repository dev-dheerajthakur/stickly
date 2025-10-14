import stylesHook from "@/src/hooks/styles.hook";
import { StyleSheet } from "react-native";

export default function chatStyle() {
  const { g, theme } = stylesHook({})
  return StyleSheet.create({
    text: {
      color: g[theme].text
    },
    container: {
      // backgroundColor: '#7e7e7eff',
      // padding: 16,
      flex: 1,
      // marginBottom: 10,
      justifyContent: 'space-between'
    },
    input: {
      paddingVertical: 16,
      color: g[theme].text,
      flex: 1,
    }, 
    inputArea: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: g[theme].backgroundDarker,
      borderRadius: 100,
      paddingHorizontal: 20
    },
    voiceIcon: {
      height: 50,
      width: 50,
      backgroundColor: g[theme].backgroundDarker,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
    }
  })
}