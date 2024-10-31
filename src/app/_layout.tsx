import { ThemeProvider } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { CustomDrawer } from "@/src/components";
import { useAppColorScheme } from "@/src/hooks/useColorScheme";
import useStore from "@/src/store";

import { Colors } from "../constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useAppColorScheme();

  const store = useStore();

  const dimensions = useWindowDimensions();

  useEffect(() => {
    store.init();
  }, []);

  if (!store.isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider
        value={
          colorScheme === "dark"
            ? {
                dark: true,
                colors: Colors.dark,
              }
            : {
                dark: false,
                colors: Colors.light,
              }
        }
      >
        <Drawer
          drawerContent={CustomDrawer}
          screenOptions={{
            drawerType: dimensions.width >= 768 ? "permanent" : "slide",
            headerStyle: {
              backgroundColor: Colors[colorScheme ?? "light"].background,
            },
          }}
        >
          <Drawer.Screen name="index" />
        </Drawer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
