import { useRef, useState } from "react";
import { Pressable, TextInput } from "react-native";

import { CountryFlag, CrossButton, ThemedText } from "@/src/components";
import { Colors } from "@/src/constants/Colors";
import { useAppColorScheme, useCurrencyValue } from "@/src/hooks";
import store from "@/src/store";
import { EAvailableFiatNames } from "@/src/types";
import { isAndroid } from "@/src/utils/platform";

import { getStyles } from "./styles";

export const CurrencyListItem = ({ item }: { item: string }) => {
  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const {
    rates,
    selectCurrency,
    selectedCurrency,
    setSelectedCurrencyValue,
    selectedCurrencyValue,
  } = store.getState();

  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const value = useCurrencyValue({
    rates,
    selectedCurrency,
    selectedCurrencyValue,
    currencyName: item,
  });

  const handleSelect = () => {
    setSelectedCurrencyValue(value);
    selectCurrency(item);

    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClear = () => {
    setSelectedCurrencyValue("");
  };

  return (
    <Pressable
      accessibilityRole="button"
      style={styles.container}
      onPress={inputRef.current?.focus}
    >
      <ThemedText
        type="subtitle"
        style={[
          !isFocused ? styles.blurredText : undefined,
        ]}
      >
        {item}
      </ThemedText>
      <TextInput
        ref={inputRef}
        accessibilityLabel="Currency input field"
        accessibilityHint="Currency input field"
        placeholder={"0"}
        value={value}
        onChangeText={setSelectedCurrencyValue}
        style={styles.input}
        keyboardType="numeric"
        clearButtonMode="while-editing"
        onFocus={handleSelect}
        onBlur={handleBlur}
        returnKeyType="done"
        placeholderTextColor={Colors[colorScheme ?? "light"].border}
      />
      {value && isFocused && isAndroid && <CrossButton onPress={handleClear} />}
      <CountryFlag currencyCode={item as EAvailableFiatNames} size={30} />
    </Pressable>
  );
};
