/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export type ColorsMap = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
};

export type ColorsType = Record<"light" | "dark", ColorsMap>;
export type AppColorScheme = "light" | "dark";
export const Colors: ColorsType = {
  light: {
    primary: "rgb(0, 122, 255)",
    background: "#f0f0f3",
    card: "#e9e9f0",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
  dark: {
    primary: "rgb(10, 132, 255)",
    background: "#202124",
    card: "#1a1921",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const fonts: ReactNavigation.Theme["fonts"] = Platform.select({
  web: {
    regular: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: "400",
    },
    medium: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: "500",
    },
    bold: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: "600",
    },
    heavy: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: "700",
    },
  },
  ios: {
    regular: {
      fontFamily: "System",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "System",
      fontWeight: "600",
    },
    heavy: {
      fontFamily: "System",
      fontWeight: "700",
    },
  },
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    bold: {
      fontFamily: "sans-serif",
      fontWeight: "600",
    },
    heavy: {
      fontFamily: "sans-serif",
      fontWeight: "700",
    },
  },
});

export const darkTheme: ReactNavigation.Theme = {
  dark: true,
  colors: Colors.dark,
  fonts: fonts,
};

export const lightTheme: ReactNavigation.Theme = {
  dark: false,
  colors: Colors.light,
  fonts: fonts,
};

/* 
fonts: {
    regular: FontStyle;
    medium: FontStyle;
    bold: FontStyle;
    heavy: FontStyle;
  };
*/
