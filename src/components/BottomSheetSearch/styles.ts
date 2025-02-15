import { StyleSheet } from "react-native";

import { getColor } from "@/src/utils/getColor";

import { Fonts } from "../UI";

export const getStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    inputContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: getColor("card", colorScheme),
    },
    input: {
      padding: 8,
      borderRadius: 25,
      backgroundColor: getColor("background", colorScheme),
      color: getColor("text", colorScheme),
      ...Fonts.defaultSemiBold,
    },
  });
};
