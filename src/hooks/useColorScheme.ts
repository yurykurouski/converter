import { useColorScheme } from "react-native";

export const useAppColorScheme = () => {
  return useColorScheme() ?? "light";
};
