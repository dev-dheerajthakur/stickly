import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import chatStyle from "./styles/chat.css";
import stylesHook from "@/src/hooks/styles.hook";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import chatItemStyle from "./styles/chatitem.css";

export const fakeConversation = [
  {
    id: "1",
    sender: "John",
    message: "Hey, how are you?",
    timestamp: "2025-09-04T10:15:00Z",
  },
  {
    id: "2",
    sender: "Dheeraj",
    message: "I'm good, just working on the project. What about you?",
    timestamp: "2025-09-04T10:16:10Z",
  },
  {
    id: "3",
    sender: "John",
    message: "Same here, got a deadline tomorrow 😅",
    timestamp: "2025-09-04T10:17:00Z",
  },
  {
    id: "3",
    sender: "John",
    message: "Same here, got a deadline tomorrow 😅",
    timestamp: "2025-09-04T10:17:00Z",
  },
  {
    id: "4",
    sender: "Dheeraj",
    message: "Haha, we’re in the same boat then!",
    timestamp: "2025-09-04T10:18:20Z",
  },
  {
    id: "4",
    sender: "Dheeraj",
    message: "Haha, we’re in the same boat then!",
    timestamp: "2025-09-04T10:18:20Z",
  },
  {
    id: "4",
    sender: "Dheeraj",
    message: "Haha, we’re in the same boat then!",
    timestamp: "2025-09-04T10:18:20Z",
  },
  {
    id: "5",
    sender: "John",
    message: "By the way, are we still meeting this weekend?",
    timestamp: "2025-09-04T10:19:30Z",
  },
  {
    id: "6",
    sender: "Dheeraj",
    message: "Yes! Let’s catch up on Saturday evening.",
    timestamp: "2025-09-04T10:20:10Z",
  },
];

export default function Chat() {
  const styles = chatStyle();
  const { g, theme } = stylesHook({});
  const inputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardVisible(true);
    });
    const hideSub = Keyboard.addListener("keyboardDidHide", (e) => {
      setKeyboardVisible(false);
    });

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 50);

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVisible ? -26 : 5}
      style={styles.container}
    >
      {/* <ScrollView
        ref={scrollViewRef}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        style={{ padding: 20 }}
      >

      </ScrollView> */}
      <FlatList
        data={fakeConversation}
        renderItem={({ item }) => <FlatlistItem item={item} />}
        keyExtractor={({ id }, index) => index.toLocaleString()}
      />
      <View style={styles.inputArea}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef}
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

function FlatlistItem({
  item,
}: {
  item: {
    id: string;
    sender: string;
    message: string;
    timestamp: string;
  };
}) {
  const styles = chatItemStyle();
  return (
    <View
      style={[
        styles.chatItem,
        item.sender === "Dheeraj" ? styles.primary : styles.secoundary,
      ]}
    >
      <Text style={{ color: "white" }}>{item.message}</Text>
    </View>
  );
}
