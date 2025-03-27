import { StyleSheet } from "react-native";

import { getColor } from "@/src/utils/getColor";

export const getStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    background: {
      backgroundColor: getColor("card", colorScheme),
    },
    scrollContainer: {
      flexDirection: "row",
      flex: 1,
    },
  });
};
