import { StyleSheet } from "react-native";

import { AppColorScheme } from "@/src/constants/Colors";
import { getColor } from "@/src/utils";

import { Fonts } from "../UI";

export const getStyles = (colorScheme: AppColorScheme) =>
  StyleSheet.create({
    container: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: getColor("card", colorScheme),
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    currencyText: {
      width: 50,
    },
    blurredText: {
      opacity: 0.5,
    },
    input: {
      flex: 1,
      color: getColor("text", colorScheme),
      ...Fonts.subtitle,
    },
  });
