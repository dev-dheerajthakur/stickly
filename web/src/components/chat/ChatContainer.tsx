"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/chatContainer.module.css";
import { messages } from "@/data/api";

export default function ChatContainer() {
  const [inputValue, setInputValue] = useState("");
  const [messageArray, setMessageArray] = useState(messages);
  const messageReference = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messageReference.current) {
      messageReference.current.scrollTop =
        messageReference.current.scrollHeight;
    }
  }, [messageArray]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
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
      setInputValue("");
    }
  };

  return (
    <div
      className={styles.container}
      // style={{ height: `calc(${viewportHeight} - 70px)` }}
    >
      <div className={styles.messages} ref={messageReference} onMouseDown={(e)=>{e.preventDefault()}}>
        {messageArray.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${
              msg.sender === "You" ? styles.yourMessage : styles.otherMessage
            }`}
          >
            <pre className={styles.messageContent}>{msg.content}</pre>
            <p className={styles.messageTimestamp}>{msg.timestamp}</p>
          </div>
        ))}
      </div>

      <form
        data-gramm="false"
        data-lpignore="true"
        data-form-type="other"
        autoComplete="none"
        className={styles.form}
        onSubmit={handleSendMessage}
      >
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          spellCheck={false}
          autoComplete="none"
          autoCorrect="none"
          className={styles.input}
          placeholder="Type a message...."
        />
        <button onMouseDown={(e)=>{e.preventDefault()}} type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
}



