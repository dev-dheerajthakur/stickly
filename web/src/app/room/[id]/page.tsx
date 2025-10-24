// "use server"
// import Link from 'next/link'
// import React from 'react'
// import styles from './page.module.css'
// import AllChats from '@/components/AllChats'
// import Chats from '@/components/Chats'

// export default async function page() {
//   return (
//     <div className={styles.container}>
//       <AllChats display="hideFromMobile" />
//       <Chats />
//     </div>
//   )
// }

// Example React client
"use client";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import styles from "./page.module.css";
import AllChats from "@/components/AllChats";
import Chats from "@/components/Chats";
import { messages } from "@/data/api";

export default function ChatClient() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [mutableMessages, setMutableMessages] = useState(messages)
  // const [msg, setMsg] = useState("");
  const [newIncomingMsg, setNewIncomingMsg] = useState("");
  // const [messages, setMessages] = useState<string[]>([]);
  const room = "general";

  useEffect(() => {
    const newSocket = io("https://stickly-server.onrender.com/", {
      transports: ["websocket"],
    });
    setSocket(newSocket);

    newSocket.emit("joinRoom", room);

    newSocket.on("newMessage", (data: typeof messages[0]) => {
      console.log("New message received:", data);
        // setMessages((prev) => [...prev, message.text]);
        setMutableMessages((prev) => [...prev, data]);
    });

    newSocket.on("joinedRoom", (confirmation) => {
      setNewIncomingMsg(confirmation);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (msg: typeof messages[0]) => {
    if (!socket) return;
    // setMutableMessages((prev) => [...prev, msg]);
    socket.emit("sendMessage", { room, msg: msg });
  };

  return (
    <div className={styles.container}>
      <AllChats display="hideFromMobile" />
      <Chats messages={mutableMessages} sendMessage={sendMessage} />
    </div>
  );
}
