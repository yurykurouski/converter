import { View } from "react-native";

import { ThemedText } from "@/src/components/UI/ThemedText";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText>Home Screen</ThemedText>
    </View>
  );
}
