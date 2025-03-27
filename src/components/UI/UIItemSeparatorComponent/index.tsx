import { StyleProp, View, ViewStyle } from "react-native";

import { styles } from "./styles";

type UIItemSeparatorComponentProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

export const UIItemSeparatorComponent = (props: UIItemSeparatorComponentProps) => {
  const { containerStyle } = props;

  return <View style={[styles.separator, containerStyle]} />;
};
