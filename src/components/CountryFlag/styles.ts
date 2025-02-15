import { StyleSheet } from "react-native";

import { AppColorScheme } from "@/src/constants/Colors";
import { getColor } from "@/src/utils";

export const getStyles = (colorScheme: AppColorScheme, size?: number) =>
  StyleSheet.create({
    flagContainer: {
      width: size ?? 28,
      height: size ?? 28,
      borderRadius: size ? size / 2 : 14,
      borderWidth: 1,
      borderColor: getColor("border", colorScheme),
    },
    icon: {
      width: "100%",
      height: "100%",
    },
  });
