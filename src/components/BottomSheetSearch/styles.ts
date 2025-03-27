import { StyleSheet } from "react-native";

import { Fonts } from "@/src/components/UI";
import { getColor } from "@/src/utils/getColor";

export const getStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    inputContainer: {
      paddingVertical: 8,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: getColor("card", colorScheme),
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      padding: 8,
      borderRadius: 25,
      backgroundColor: getColor("background", colorScheme),
      color: getColor("text", colorScheme),
      flexGrow: 1,
      ...Fonts.defaultSemiBold,
    },
  });
};
