import { StyleSheet } from "react-native";

import { AppColorScheme } from "@/src/constants/Colors";
import { getColor } from "@/src/utils/getColor";

export const getStyles = (colorScheme: AppColorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 8,
      backgroundColor: getColor("background", colorScheme),
      borderRadius: 8,
      marginLeft: 16,
      gap: 8,
    },
    leftContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      flex: 1,
    },
    nameContainer: {
      gap: 4,
    },
    currencyName: {
      flexWrap: "wrap",
    },
  });
};
