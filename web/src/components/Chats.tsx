"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles/chats.module.css'
import Header from './chat/Header'
import ChatContainer from './chat/ChatContainer'

export default function Chats() {

    const [viewportHeight, setViewportHeight] = useState("100dvh");
    const messageReference = useRef<HTMLDivElement>(null);
  
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
    <div className={styles.container} style={{height: viewportHeight}}>
      <Header />
      <ChatContainer />
    </div>
  )
}
