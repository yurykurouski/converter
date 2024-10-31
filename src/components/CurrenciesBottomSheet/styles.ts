import { StyleSheet } from "react-native";

import { getColor } from "@/src/utils/getColor";

import { Fonts } from "../UI";

export const getStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    background: {
      backgroundColor: getColor("card", colorScheme),
    },
    handle: {
      backgroundColor: getColor("text", colorScheme),
      width: 60,
    },
    input: {
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 8,
      //   fontSize: 16,
      //   lineHeight: 20,
      padding: 8,
      backgroundColor: getColor("background", colorScheme),
      color: getColor("text", colorScheme),
      ...Fonts.defaultSemiBold,
    },
  });
};
