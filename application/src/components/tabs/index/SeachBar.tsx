import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import searchBarIconStyles from "./search-bar.css";
import stylesHook from "@/src/hooks/styles.hook";
import { LinearGradient } from "expo-linear-gradient";

export default function SearchBar() {
  const styles = searchBarIconStyles();
  const { g, theme } = stylesHook({});
  return (
    <TextInput
      placeholder="Search"
      style={styles.searchBar}
      placeholderTextColor={g[theme].bg5}
    />
  );
}
