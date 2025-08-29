import { FlatList, Image, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import chatsStyles from "./chats.css";
import getAllChats, { Chat } from "@/src/apis/chats/get-all-chats";
import { router } from "expo-router";

function ChatItem({ chat }: { chat: Chat }) {
  const styles = chatsStyles();
  return (
    <View style={styles.chatItem}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.3 : 1, // dim effect
          },
        ]}
      >
        <Image
          source={{ uri: "https://picsum.photos/seed/picsum/200/200" }}
          style={styles.chatAvatar}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          // navigate("/oneToOneChat/1234", { name: "dheeraj" });
          router.push({ pathname: "/oneToOneChat", params: { id: "2343", name: "dheeraj" } });
        }}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1, // dim effect
          },
          styles.pressable,
        ]}
      >
        <View style={styles.chatContent}>
          <Text style={styles.chatSender}>{chat.sender.name}</Text>
          <Text style={styles.chatMessage}>{chat.lastMessage[0]}</Text>
        </View>
        <View style={styles.chatTime}>
          <Text style={[styles.text, styles.messageTimeStamp]}>
            {chat.timestamp.getHours()}
            <Text style={[styles.text, styles.messageTimeStamp]}>
              :{chat.timestamp.getMinutes()}
            </Text>
          </Text>
          <View style={styles.messageCounter}>
            <Text style={[styles.text, { fontWeight: 900 }]}>
              {chat.lastMessage.length}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default function Chats() {
  const styles = chatsStyles();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const response = await getAllChats();
      setChats(response);
    };
    fetchChats();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={({ item }) => <ChatItem chat={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
}
