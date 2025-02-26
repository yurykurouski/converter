import BottomSheet, { BottomSheetFlashList } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useState } from "react";

import {
  BottomSheetSearch,
  CurrencyBottomSheetItem,
  UIItemSeparatorComponent,
} from "@/src/components";
import { useAppColorScheme } from "@/src/hooks";
import i18n from "@/src/i18n";
import useStore from "@/src/store";
import store from "@/src/store";
import { CurrencyCrypto, CurrencyFiat } from "@/src/types";

import { ListEmptyComponent } from "./ListEmptyComponent";
import { getStyles } from "./styles";

export const CurrenciesBottomSheet = () => {
  const { currenciesFiat } = useStore();

  const [searchValue, setSearchValue] = useState<string>("");

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const snapPoints = useMemo(() => [64, "100%"], []);

  const renderItem = useCallback(
    ({ item }: { item: CurrencyFiat | CurrencyCrypto }) => (
      <CurrencyBottomSheetItem currency={item} />
    ),
    []
  );

  const currenciesToRender = currenciesFiat.filter((currency) => {
    const currencyName = i18n.t(`currency.${currency.id}`);

    return (
      currency.id.toLowerCase().includes(searchValue.toLowerCase()) ||
      currencyName.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <BottomSheet
      snapPoints={snapPoints}
      backgroundStyle={styles.background}
      handleIndicatorStyle={styles.handle}
      enableDynamicSizing={false}
    >
      <BottomSheetFlashList
        data={currenciesToRender}
        renderItem={renderItem}
        estimatedItemSize={54}
        ItemSeparatorComponent={UIItemSeparatorComponent}
        extraData={store.getState().selectedFiatCurrencies}
        keyExtractor={(item) => item.id}
        indicatorStyle={colorScheme === "dark" ? "white" : "black"}
        ListEmptyComponent={ListEmptyComponent}
      />
      <BottomSheetSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </BottomSheet>
  );
};
