import {
  ImageBackground,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { g } from "@/src/constants/Colors";
import { useRouter } from "expo-router";
import signInStyles from "@/src/styles/get-started/sign-in.styles";
import * as secureStore from "expo-secure-store";
import { showToast } from "@/src/hooks/toast.hook";
import LoadingLottie from "@/src/components/lottie/Loading.lottie";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const navigateToSignUp = () => {
    router.navigate(`/(getStarted)/signUp`);
  };

  const handleSignIn = async function () {
    setIsLoading(true);
    await secureStore.setItemAsync("authToken", "8235681352"); // Example token, replace with actual logic
    showToast("Sign in successful! ");
    router.navigate("/(tabs)");
    router.reload();
    setIsLoading(false);
  };

  const isDarkMode = useColorScheme() === "dark" ? "dark" : "light";
  const styles = signInStyles();

  return (
    <View style={styles.container}>

      <ImageBackground
        style={{ flex: 1, backgroundColor: "#d6a427" }}
        source={require("./../../src/assets/png/grid.png")}
        imageStyle={{ opacity: 0.7 }}
      >
        <View style={styles.chatContainer}>
          <View style={[styles.chats, styles.incomingChat]}>
            <Text style={styles.chatText}>
              Hola!{"\n"}Nice to hear from you.
            </Text>
          </View>
          <View style={[styles.chats, styles.outGoingChat]}>
            <Text style={styles.chatText}>And you, too!</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Sign in</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          autoCapitalize="none"
          accessible
          accessibilityLabel="Email"
          placeholder="your-mail@gmail.com"
          placeholderTextColor={g[isDarkMode].bg5}
        />
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          accessible
          accessibilityLabel="Email"
          placeholder="****************"
          placeholderTextColor={g[isDarkMode].bg5}
          secureTextEntry
        />
        <TouchableOpacity activeOpacity={0.8} onPress={handleSignIn}>
          <Text style={styles.btn}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={navigateToSignUp}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "500",
              margin: 20,
            }}
          >
            Don't have an account? Sign up here.
          </Text>
        </TouchableOpacity>
      </View>
      <LoadingLottie animate={isLoading} backgroundColor={"rgba(0, 0, 0, 0.27)"} />
    </View>
  );
}
