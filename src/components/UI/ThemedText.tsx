import { Text, type TextProps } from "react-native";

import { useAppColorScheme } from "@/src/hooks";

import { getStyles } from "./styles";

export type ThemedTextProps = TextProps & {
  type?:
    | "small"
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  return (
    <Text
      style={[
        type === "small" ? styles.small : undefined,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
