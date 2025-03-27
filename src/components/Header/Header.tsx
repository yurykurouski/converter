import { useCallback, useState } from "react";
import React from "react";
import { LayoutChangeEvent, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import { ThemedText } from "@/src/components/UI";
import { useBottomSheetContext } from "@/src/context/BottomSheetContext";
import i18n from "@/src/i18n";

import { styles } from "./styles";

export const Header = () => {
  const { animatedIndex } = useBottomSheetContext();
  const [height, setHeight] = useState(0);

  const animStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -(animatedIndex?.value ?? 0) * height,
        },
      ],
    };
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeight(height);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[animStyles]}>
        <ThemedText
          onLayout={onLayout}
          type="defaultSemiBold"
          style={{ textTransform: "uppercase" }}
        >
          Converter
        </ThemedText>
        <ThemedText
          type="defaultSemiBold"
          style={{ textTransform: "uppercase" }}
        >
          {i18n.t("currenciesMain.headerCurrencyFiat")}
        </ThemedText>
      </Animated.View>
    </View>
  );
};
