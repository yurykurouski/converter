import BottomSheet, { BottomSheetFlashList } from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  BottomSheetSearch,
  CurrencyBottomSheetItem,
  UIItemSeparatorComponent,
} from "@/src/components";
import { BottomSheetContext } from "@/src/context/BottomSheetContext";
import { useAppColorScheme, useBackHandler } from "@/src/hooks";
import i18n from "@/src/i18n";
import useStore from "@/src/store";
import store from "@/src/store";
import { CurrencyCrypto, CurrencyFiat } from "@/src/types";
import { isAndroid } from "@/src/utils/platform";

import { ListEmptyComponent } from "./ListEmptyComponent";
import { getStyles } from "./styles";

export const CurrenciesBottomSheet = () => {
  const { currenciesFiat } = useStore();
  const animatedIndex = useContext(BottomSheetContext);

  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const ref = useRef<BottomSheet>(null);

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

  const handleChange = (index: number) => {
    setIsOpen(index === 1);
  };

  const backAction = useCallback(() => {
    if (isAndroid) {
      if (isOpen) {
        ref.current?.collapse();
        return true;
      } else {
        return false;
      }
    }
    return true;
  }, [isOpen]);

  useBackHandler(backAction);

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      backgroundStyle={styles.background}
      handleIndicatorStyle={styles.handle}
      enableDynamicSizing={false}
      onChange={handleChange}
      animatedIndex={animatedIndex}
      animateOnMount={isAndroid}
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
