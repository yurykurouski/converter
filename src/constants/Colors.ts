/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

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
