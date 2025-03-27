import { StyleSheet } from "react-native";

import { Fonts } from "@/src/components/UI";
import { AppColorScheme } from "@/src/constants/Colors";
import { getColor } from "@/src/utils";

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
    blurredText: {
      opacity: 0.5,
    },
    input: {
      flex: 1,
      color: getColor("text", colorScheme),
      ...Fonts.subtitle,
    },
    closeIcon: {
      paddingHorizontal: 2,
    },
  });
