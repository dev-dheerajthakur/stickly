import { useEffect, useState, useRef } from 'react';
import { NativeModules, DeviceEventEmitter, Animated } from 'react-native';

// Type definitions for the native module
interface IMEInsetsModule {
  startListening(): void;
  getCurrentInsets(): Promise<WindowInsetsData>;
}

interface WindowInsetsData {
  imeHeight: number;
  statusBarHeight: number;
  navigationBarHeight: number;
  isKeyboardVisible: boolean;
}

interface UseWindowInsetsReturn {
  insets: WindowInsetsData;
  animatedIMEHeight: Animated.Value;
}

// Type the NativeModules to include our custom module
interface NativeModulesType {
  IMEInsets: IMEInsetsModule;
}

const { IMEInsets } = NativeModules as NativeModulesType;

export function useWindowInsets(): UseWindowInsetsReturn {
  const [insets, setInsets] = useState<WindowInsetsData>({
    imeHeight: 0,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    isKeyboardVisible: false
  });

  const animatedIMEHeight = useRef<Animated.Value>(new Animated.Value(0)).current;

  useEffect(() => {
    if (!IMEInsets) {
      console.warn('IMEInsets module not available');
      return;
    }

    // Start listening for changes
    IMEInsets.startListening();

    // Get initial state
    IMEInsets.getCurrentInsets()
      .then((initialInsets: WindowInsetsData) => {
        setInsets(initialInsets);
        animatedIMEHeight.setValue(initialInsets.imeHeight);
      })
      .catch((error: Error) => {
        console.warn('Failed to get initial insets:', error);
      });

    // Listen for changes
    const subscription = DeviceEventEmitter.addListener(
      'onInsetsChanged',
      (newInsets: WindowInsetsData) => {
        setInsets(newInsets);
        
        // Animate the change smoothly
        Animated.timing(animatedIMEHeight, {
          toValue: newInsets.imeHeight,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => subscription.remove();
  }, [animatedIMEHeight]); // Added dependency for better ESLint compliance

  return { 
    insets, 
    animatedIMEHeight 
  };
}