import { View } from "react-native";

import { isIOS } from "@/src/utils/platform";

export const ListFooterComponent = () => {
  return <View style={{ height: isIOS ? 48 : 78 }} />;
};
