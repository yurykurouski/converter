import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View } from "react-native";

export const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Home" onPress={() => console.log("Home")} />
      </DrawerContentScrollView>
    </View>
  );
};
