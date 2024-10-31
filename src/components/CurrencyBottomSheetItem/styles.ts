import { StyleSheet } from "react-native";

import { getColor } from "@/src/utils/getColor";

export const getStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 8,
      backgroundColor: getColor("background", colorScheme),
      borderRadius: 8,
      marginHorizontal: 16,
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
    icon: {
      width: 28,
      height: 28,
      // alignItems: "center",
      // justifyContent: "center",
      // textAlign: "center",

      borderRadius: 14,
      overflow: "hidden",
    },
    currencyName: {
      flexWrap: "wrap",
    },
  });
};
