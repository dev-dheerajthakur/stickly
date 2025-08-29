import {
  ActivityIndicator,
  ColorSchemeName,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

interface firstScreenFilterProps {
  loaded: boolean;
  isAuthenticated: boolean | null;
  colorScheme: ColorSchemeName;
}

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );
}

function GetStartedScreen() {
  return (
    <Stack
      initialRouteName={"(getStarted)"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="(getStarted)" options={{ headerShown: false }} />
    </Stack>
  );
}

function HomeScreen({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          initialRouteName={"(tabs)"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="oneToOneChat" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}

export default function FirstScreenFilter({
  loaded,
  isAuthenticated,
  colorScheme,
}: firstScreenFilterProps) {
  return (
    <>
      {!loaded || isAuthenticated === null ? (
        <LoadingScreen />
      ) : !isAuthenticated ? (
        <GetStartedScreen />
      ) : (
        <HomeScreen colorScheme={colorScheme} />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
