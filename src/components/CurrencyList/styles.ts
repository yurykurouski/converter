import { StyleSheet } from "react-native";

import { isIOS } from "@/src/utils/platform";

export const getStyles = (bottom: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: bottom + (isIOS ? 38 : 68),
    },
    contentContainer: {
      paddingTop: 8,
      paddingHorizontal: 16,
    },
  });
