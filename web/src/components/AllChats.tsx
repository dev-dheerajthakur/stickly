import React from "react";
import styles from "./styles/allChats.module.css";

export default function AllChats({display}: {display?: "hideFromMobile"}) {
  return (
    <div className={`${styles.container} ${display && styles[display]}`}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <i className={`search-icon ${styles.searchIcon}`}>&#128269;</i>
      </div>
    </div>
  );
}
