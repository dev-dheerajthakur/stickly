import React from 'react'
import styles from './styles/chats.module.css'
import Header from './chat/Header'
import ChatContainer from './chat/ChatContainer'

export default function Chats() {
  return (
    <div className={styles.container}>
      <Header />
      <ChatContainer />
    </div>
  )
}
