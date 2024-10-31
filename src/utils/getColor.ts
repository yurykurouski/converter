import type { ColorsMap } from "../constants/Colors";
import { Colors } from "../constants/Colors";

export const getColor = (
  color: keyof ColorsMap,
  colorScheme: "light" | "dark"
) => {
  return Colors[colorScheme][color];
};
