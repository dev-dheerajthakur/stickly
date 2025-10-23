"use client"
import React from "react";
import styles from "./styles/header.module.css";
import { useRouter } from "next/navigation";
import profilePicture from './../../assets/profile.png'

interface HeaderProps {
  name: string;
  status: string;
}

export default function Header({ name = "Dheeraj Thakur", status = "online" }: HeaderProps) {
  const router = useRouter();
  
  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <p className={styles.backButton} onClick={handleBackClick}>&lt;--</p>
      <img src={profilePicture.src} alt="Profile" className={styles.profileImage} />
      <div className={styles.userInfo}>
        <p className={styles.username}>{name}</p>
        <p className={styles.status}>{status}</p>
      </div>
      <div className={styles.actions}>
        <button>Message</button>
        <button>Call</button>
      </div>
    </div>
  );
}
