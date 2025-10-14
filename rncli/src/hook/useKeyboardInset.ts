// src/hooks/useKeyboardInsets.ts (example)
import { useEffect, useState } from "react";
import { NativeEventEmitter, NativeModules, Platform } from "react-native";

const { KeyboardInsetsModule } = NativeModules;
const emitter = KeyboardInsetsModule ? new NativeEventEmitter(KeyboardInsetsModule) : null;

export function useKeyboardInsets() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS !== "android" || !emitter || !KeyboardInsetsModule) return;

    // start native listening
    KeyboardInsetsModule.startListening();

    const sub = emitter.addListener("keyboardHeightChanged", ({ height }) => {
      setHeight(height);
    });

    return () => {
      sub.remove();
      // stop native listening (safe-guard)
      KeyboardInsetsModule.stopListening && KeyboardInsetsModule.stopListening();
    };
  }, []);

  return { height };
}
