import React from "react";
import styles from "./styles/allChats.module.css";
import { allChats } from "@/data/api";
import profilePicture from "./../assets/profile.png"
import Link from "next/link";

function ChatTemplate(chat: typeof allChats[0]) {
  return (
    <Link href={`/room/${chat.id}`} key={chat.id} className={styles.chatItem}>
      <img src={profilePicture.src} alt="--" className={styles.profilePicture} />
      <div className={styles.chatInfo}>
        <pre className={styles.chatName}>{chat.name}</pre>
        <div className={styles.lastMessage}>✔✔{chat.lastMessage}</div>
      </div>
      <pre className={styles.timestamp}>{chat.timestamp}</pre>
    </Link>

  )
}

export default function AllChats({display}: {display?: "hideFromMobile"}) {
  return (
    <div className={`${styles.container} ${display && styles[display]}`}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <i className={`search-icon ${styles.searchIcon}`}>&#128269;</i>
      </div>
      <div className={styles.chatsList}>
        {
          allChats.map((chat) => (
            <ChatTemplate key={chat.id} {...chat} />
          ))}
      </div>
    </div>
  );
}
