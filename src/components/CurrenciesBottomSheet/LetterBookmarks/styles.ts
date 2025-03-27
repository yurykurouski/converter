import { StyleSheet } from "react-native";

import { getColor } from "@/src/utils";

export const getStyles = (colorScheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      justifyContent: "space-around",
      alignItems: "center",
      width: 16,
    },
    letterContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 2,
      borderRadius: 4,
    },
    activeLetterContainer: {
      backgroundColor: getColor("primary", colorScheme),
      position: "absolute",
      width: 14,
      height: 14,
      borderRadius: 4,
      marginVertical: 2,
    },
  });
