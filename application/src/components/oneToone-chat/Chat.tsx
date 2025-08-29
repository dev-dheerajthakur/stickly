import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import chatStyle from "./styles/chat.css";
import stylesHook from "@/src/hooks/styles.hook";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Chat() {
  const styles = chatStyle();
  const { g, theme } = stylesHook({});
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      console.log(e.endCoordinates.height);
      setKeyboardVisible(true);
    });
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      console.log("Keyboard hidden");
      setKeyboardVisible(false);
    });

    Keyboard.addListener("keyboardDidChangeFrame", (e) => {
      console.log("Keyboard frame changed", e.endCoordinates);
    });
    Keyboard.addListener("keyboardWillChangeFrame", (e) => {
      console.log("Keyboard frame changed", e.endCoordinates);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [Keyboard]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVisible ? -26 : 5}
      style={styles.container}
    >
      <ScrollView></ScrollView>
      <View style={styles.inputArea}>
        <View style={styles.inputContainer}>
          <Text>hii</Text>
          <TextInput
            style={styles.input}
            placeholder="message"
            placeholderTextColor={g[theme].bg5}
          />
        </View>
        <View style={styles.voiceIcon}>
          <MaterialIcons name="mic" size={25} color={g.secondaryColour} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});