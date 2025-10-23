"use server"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import AllChats from '@/components/AllChats'
import Chats from '@/components/Chats'

export default async function page() {
  return (
    <div className={styles.container}>
      <AllChats display="hideFromMobile" />
      <Chats />
    </div>
  )
}
