"use client";
import React, { useRef, useState } from "react";
import styles from "./styles/chatContainer.module.css";
import { messages } from "@/data/api";

export default function ChatContainer() {
  const [inputValue, setInputValue] = useState("");
  const [messageArray, setMessageArray] = useState(messages);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessageArray([
        ...messageArray,
        {
          id: messageArray.length + 1,
          sender: "You",
          content: inputValue.trim(),
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      // Send the message
      setInputValue("");
    }

    inputRef.current?.focus();
  }

  function handleIncomingMessage() {}

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
        <form
          data-gramm="false"
          data-lpignore="true" // 🧠 Tells LastPass/Chrome to ignore it
          data-form-type="other" // 🧠 Helps avoid password detection
          autoComplete="none"
          className={styles.form}
          onSubmit={handleSendMessage}
        >
          <input
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            spellCheck={false}
            autoComplete="none"
            type="text"
            className={styles.input}
            placeholder="Type a message...."
            data-form-type="other" // 🧠 Important for Android Autofill
          />
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
