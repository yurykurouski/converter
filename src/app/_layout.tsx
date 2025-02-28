import { ThemeProvider } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { CustomDrawer, Header } from "@/src/components";
import { BottomSheetProvider } from "@/src/context";
import { useAppColorScheme } from "@/src/hooks/useColorScheme";
import useStore from "@/src/store";

import { Colors, darkTheme, lightTheme } from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useAppColorScheme();

  const store = useStore();

  const dimensions = useWindowDimensions();

  useEffect(() => {
    store.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!store.isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
        <BottomSheetProvider>
          <StatusBar
            style={colorScheme === "dark" ? "light" : "dark"}
            translucent={false}
            backgroundColor={Colors[colorScheme ?? "light"].background}
          />
          <Drawer drawerContent={CustomDrawer}>
            <Drawer.Screen
              name="index"
              options={{
                drawerType: dimensions.width >= 768 ? "permanent" : "slide",
                headerStyle: {
                  backgroundColor: Colors[colorScheme ?? "light"].background,
                },
                headerTitle: Header,
                headerTitleAlign: "left",
              }}
            />
          </Drawer>
        </BottomSheetProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
