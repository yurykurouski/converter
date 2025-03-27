import { StyleProp, ViewStyle } from "react-native";
import { Pressable } from "react-native-gesture-handler";

import { ThemedText } from "../ThemedText";
import { styles } from "./styles";

export const CrossButton = ({
  onPress,
  containerStyle,
}: {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      style={[styles.closeIcon, containerStyle]}
      onPress={onPress}
    >
      <ThemedText type="subtitle">⊗</ThemedText>
    </Pressable>
  );
};
