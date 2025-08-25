import { g } from "@/src/constants/Colors";
import { useColorScheme } from "react-native";
import { Dimensions } from "react-native";

interface StyleHookProps {
  screenDimensionType?: "window" | "screen";
}

export default function stylesHook({
  screenDimensionType = "window",
}: StyleHookProps) {
  const theme: "light" | "dark" =
    useColorScheme() === "dark" ? "dark" : "light";
  const screenDimensions = Dimensions.get(screenDimensionType);

  return { theme, screenDimensions, g };
}
