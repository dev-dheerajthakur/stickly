"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles/chats.module.css'
import Header from './chat/Header'
import ChatContainer from './chat/ChatContainer'

export default function Chats() {

    const [viewportHeight, setViewportHeight] = useState("100dvh");
  
    // Handle viewport height changes for mobile keyboard
    useEffect(() => {
      const handleResize = () => {
        if (window.visualViewport) {
          setViewportHeight(`${window.visualViewport.height}px`);
        }
      };
  
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", handleResize);
        handleResize();
      }
  
      return () => {
        window.visualViewport?.removeEventListener("resize", handleResize);
      };
    }, []);


  return (
    <div style={{height: viewportHeight}} className={styles.container}>
      <Header name="Dheeraj Thakur" status="online" />
      <ChatContainer />
    </div>
  )
}
