import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CurrenciesBottomSheet } from "@/src/components";
import { ThemedText } from "@/src/components/UI/ThemedText";

export default function Home() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
      <ThemedText>Home Screen</ThemedText>

      <CurrenciesBottomSheet />
    </View>
  );
}
