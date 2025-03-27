import { StyleSheet } from "react-native";

import { getColor } from "@/src/utils/getColor";

import { Fonts } from "./fonts";

export const getStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    small: {
      ...Fonts.small,
      color: getColor("text", colorScheme),
    },
    default: {
      ...Fonts.default,
      color: getColor("text", colorScheme),
    },
    defaultSemiBold: {
      ...Fonts.defaultSemiBold,
      color: getColor("text", colorScheme),
    },
    title: {
      ...Fonts.title,
      color: getColor("text", colorScheme),
    },
    subtitle: {
      ...Fonts.subtitle,
      color: getColor("text", colorScheme),
    },
    link: {
      ...Fonts.link,
      color: getColor("text", colorScheme),
    },
    smallSemiBold: {
      ...Fonts.smallSemiBold,
      color: getColor("text", colorScheme),
    },
  });
};
