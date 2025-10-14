/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const g = {
  dark: {
    text:              "#F0F6FF", 
    textLight:         "#d9e2f0", 
    textLighter:       "#D1D9E6", 
    bg3:               "#B0B9CA", 
    bg4:               "#8A93A9", 
    bg5:               "#636D85", 
    backgroundLighter: "#303747ff", 
    backgroundLight:   "#212833", 
    background:        "#1A1D24", 
    backgroundDark:    "#14161B", 
    backgroundDarker:  "#0E1013", 
  },
  light: {
    backgroundLighter: "#ffffff", // Lightest surface (card, inputs)
    backgroundLight:   "#F1F5F9", // Lighter background layer
    background:        "#E4EBF1", // 🎯 Main background color
    backgroundDark:    "#CFD8E0", // Slightly darker (dividers, hover)
    backgroundDarker:  "#B5C0CB", // For depth, disabled states
    bg5:               "#95A3B1", // Mid-gray-blue (icons, border)
    bg4:               "#738091", // Muted blue-gray (labels, inactive)
    bg3:               "#505C6A", // Darker gray-blue
    textLighter:       "#2E3743", // Soft black, secondary text
    textLight:         "#1A1D24",
    text:              "#0e1014", // For primary text (same as dark theme base)
  },
  // dark: {
  //     bg1: '#ECEFF0',
  //     bg2: '#C5CCCF',
  //     bg3: '#A9B3B8',
  //     bg4: '#829097',
  //     bg5: '#6A7B83',
  //     bg6: '#455A64',
  //     bg7: '#3F525B',
  //     bg8: '#314047',
  //     bg9: '#263237',
  //     bg10: '#1D262A',
  // },
  // light: {
  //   bg1: "#292929",
  //   bg2: "#353535",
  //   bg3: "#454545",
  //   bg4: "#585858",
  //   bg5: "#616161",
  //   bg6: "#818181",
  //   bg7: "#959595",
  //   bg8: "#B6B6B6",
  //   bg9: "#CECECE",
  //   bg10: "#EFEFEF",
  // },
  // dark: {
  //   bg1: "#36454f",
  //   bg2: "#313e47",
  //   bg3: "#2b373f",
  //   bg4: "#263037",
  //   bg5: "#20292f",
  //   bg6: "#1b2328",
  //   bg7: "rgba(22, 28, 32, 1)",
  //   bg8: "rgba(16, 21, 24, 1)",
  //   bg9: "rgba(11, 14, 16, 1)",
  //   bg10: "rgba(6, 7, 8, 1)",
  // },
  yellow: "#FFD15C",
  orange: "#FF8642",
  skyBlue: "#ADDAFA",
  secondaryColour: "#f34c4c",
};
