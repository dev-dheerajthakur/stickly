import { useFonts } from "expo-font";
import "react-native-reanimated";
import * as secureStore from "expo-secure-store";

import { useColorScheme } from "@/src/hooks/useColorScheme";
import Toast from "react-native-toast-message";
import { useEffect, useState } from "react";
import validateUser from "@/src/apis/users/validateUser";
import LocalAuthenticationGate from "@/src/components/auth/LocalAuthentication";
import FirstScreenFilter from "@/src/components/root/FirstScreenFilter";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loaded] = useFonts({
    // SpaceMono: require("../src/assets/fonts/SpaceMono-Regular.ttf"),
    SpaceMono: require("../src/assets/fonts/CascadiaCode.ttf"),
  });

  useEffect(() => {
    const authenticateUser = async function () {
      try {
        const token = await secureStore.getItemAsync("authToken");
        if (!token) {
          setIsAuthenticated(false);
          return;
        }
        const data = await validateUser(token);
        setIsAuthenticated(data.isAuthenticated);
      } catch {
        setIsAuthenticated(false);
      }
    };
    authenticateUser();
  }, []);

  return (
    <>
        <FirstScreenFilter
          loaded={loaded}
          isAuthenticated={isAuthenticated}
          colorScheme={colorScheme}
        />

      <Toast position="bottom" swipeable />
    </>
    // <LocalAuthenticationGate>
    // </LocalAuthenticationGate>
  );
}
