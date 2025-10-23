"use client";
import React, { useState } from "react";
import styles from "./styles/chatContainer.module.css";
import { messages } from "@/data/api";

export default function ChatContainer() {
  const [inputValue, setInputValue] = useState("");
  const [messageArray, setMessageArray] = useState(messages)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessageArray([...messageArray, {
      id: messageArray.length + 1,
      sender: "You",
      content: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }])
    if (inputValue) {
      // Send the message
      setInputValue("");
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messageArray.map((msg) => {
          return (
            <div
              key={msg.id}
              className={`${styles.message} ${
                msg.sender === "You" ? styles.yourMessage : styles.otherMessage
              }`}
            >
              {/* <p className={styles.messageSender}>{msg.sender}</p> */}
              <p className={styles.messageContent}>{msg.content}</p>
              <p className={styles.messageTimestamp}>{msg.timestamp}</p>
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={handleSendMessage}>
          <input
            value={inputValue}
            onChange={handleInputChange}
            spellCheck={false}
            type="text"
            className={styles.input}
            placeholder="Type a message...."
          />
        </form>
      </div>
    </div>
  );
}
