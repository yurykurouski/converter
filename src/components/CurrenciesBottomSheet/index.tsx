import BottomSheet, { BottomSheetFlashList } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import {
  BottomSheetSearch,
  CurrencyBottomSheetItem,
  UIItemSeparatorComponent,
} from "@/src/components";
import { useBottomSheetContext } from "@/src/context/BottomSheetContext";
import { useAppColorScheme, useBackHandler } from "@/src/hooks";
import i18n from "@/src/i18n";
import useStore from "@/src/store";
import store from "@/src/store";
import { Currency } from "@/src/types";
import { isAndroid } from "@/src/utils/platform";

import { HandleComponent } from "./HandleComponent";
import { LetterBookmarks } from "./LetterBookmarks";
import { ListEmptyComponent } from "./ListEmptyComponent";
import { useCustomScrollEventsHandlers } from "./ListEmptyComponent/hooks";
import { getStyles } from "./styles";

export const CurrenciesBottomSheet = () => {
  const { currenciesFiat, selectedCurrencyType } = useStore();
  const { animatedIndex } = useBottomSheetContext();


  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const ref = useRef<BottomSheet>(null);
  const flashListRef = useRef(null);

  const contentHeight = useSharedValue(0);

  const snapPoints = useMemo(() => [64, "100%"], []);

  const renderItem = useCallback(
    ({ item }: { item: Currency }) => (
      <CurrencyBottomSheetItem currency={item} selectedCurrencyType={selectedCurrencyType} />
    ),
    [selectedCurrencyType]
  );

  const onHandlerPress = useCallback(() => {
    ref.current?.expand();
  }, []);
  const renderHandle = useCallback(() => <HandleComponent onPress={onHandlerPress} />, [onHandlerPress]);

  const currenciesToRender = currenciesFiat.filter((currency) => {
    const currencyName = i18n.t(`currency.${currency.id}`);

    return (
      currency.id.toLowerCase().includes(searchValue.toLowerCase()) ||
      currencyName.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const letters = useMemo(() => {
    return currenciesToRender.reduce((acc, currency, index) => {
      const letter = currency.id[0].toUpperCase();

      if (!acc.some((item) => item.letter === letter)) {
        acc.push({ letter, index });
      }

      return acc;
    }, [] as { letter: string; index: number }[]);
  }, [currenciesToRender]);

  const itemsToLetters = useMemo(() => {
    return letters.reduce((acc, item, index) => {
      acc[item.index] = index;

      return acc;
    }, {} as Record<number, number>);
  }, [letters]);

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
      handleComponent={renderHandle}
      enableDynamicSizing={false}
      onChange={handleChange}
      animatedIndex={animatedIndex}
      animateOnMount={isAndroid}
    >
      <View style={styles.scrollContainer}>
        <BottomSheetFlashList
          ref={flashListRef}
          data={currenciesToRender}
          renderItem={renderItem}
          estimatedItemSize={54}
          ItemSeparatorComponent={UIItemSeparatorComponent}
          extraData={store.getState().selectedFiatCurrencies}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={ListEmptyComponent}
          showsVerticalScrollIndicator={false}
          scrollEventsHandlersHook={useCustomScrollEventsHandlers}
          onContentSizeChange={(_, height) => {
            contentHeight.value = height;
          }}
        />
        <LetterBookmarks
          ref={flashListRef}
          letters={letters}
          itemsToLetters={itemsToLetters}
          contentHeight={contentHeight}
        />
      </View>

      <BottomSheetSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </BottomSheet>
  );
};


