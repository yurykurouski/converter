import BottomSheet, {
  BottomSheetFlashList,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { View } from "react-native";

import { CurrencyBottomSheetItem } from "@/src/components";
import { useAppColorScheme } from "@/src/hooks";
import useStore from "@/src/store";
import store from "@/src/store";

import { getStyles } from "./styles";

const ItemSeparatorComponent = () => <View style={{ height: 16 }} />;

export const CurrenciesBottomSheet = () => {
  const { currenciesFiat } = useStore();

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const snapPoints = useMemo(() => [64, "100%"], []);

  const renderItem = ({ item }) => <CurrencyBottomSheetItem currency={item} />;

  return (
    <BottomSheet
      snapPoints={snapPoints}
      backgroundStyle={styles.background}
      handleIndicatorStyle={styles.handle}
    >
      <BottomSheetFlashList
        data={currenciesFiat}
        renderItem={renderItem}
        estimatedItemSize={54}
        ItemSeparatorComponent={ItemSeparatorComponent}
        extraData={store.getState().selectedFiatCurrencies}
        keyExtractor={(item) => item.id}
      />
      <BottomSheetTextInput
        style={styles.input}
        clearButtonMode="while-editing"
      />
    </BottomSheet>
  );
};
