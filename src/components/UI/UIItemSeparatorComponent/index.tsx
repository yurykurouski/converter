import { View } from "react-native";

import { styles } from "./styles";

export const UIItemSeparatorComponent = (props) => {
  const { containerStyle } = props;

  return <View style={[styles.separator, containerStyle]} />;
};
