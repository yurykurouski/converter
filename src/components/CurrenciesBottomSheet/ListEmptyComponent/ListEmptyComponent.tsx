import React from "react";
import { View } from "react-native";

import { ThemedText } from "@/src/components/UI";
import i18n from "@/src/i18n";

import { styles } from "./styles";

export const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <ThemedText>{i18n.t("currenciesMain.emptySearchResult")}</ThemedText>
    </View>
  );
};
