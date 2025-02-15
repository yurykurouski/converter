import type { AppColorScheme, ColorsMap } from "@/src/constants/Colors";
import { Colors } from "@/src/constants/Colors";

export const getColor = (
  color: keyof ColorsMap,
  colorScheme: AppColorScheme
) => {
  return Colors[colorScheme][color];
};
