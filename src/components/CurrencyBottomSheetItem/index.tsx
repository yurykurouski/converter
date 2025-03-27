import Icon from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

import { CountryFlag, ThemedText } from "@/src/components";
import { useAppColorScheme } from "@/src/hooks";
import i18n from "@/src/i18n";
import store from "@/src/store";
import { debounce, getColor } from "@/src/utils";

import { getStyles } from "./styles";
import { TCurrencyBottomSheetItemProps } from "./types";

export const CurrencyBottomSheetItem = (
  props: TCurrencyBottomSheetItemProps,
) => {
  const { currency, /* selectedCurrencyType */ } = props;

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const [isSelected, setIsSelected] = useState(() =>
    store.getState().selectedFiatCurrencies.includes(currency.id)
  );

  const debouncedSelectFiatCurrency = debounce(
    () => store.getState().selectFiatCurrency(currency.id),
    150
  );

  const handlePress = () => {
    setIsSelected((state) => !state);
    debouncedSelectFiatCurrency();
  };

  return (
    <Pressable
      android_ripple={{ color: getColor("card", colorScheme) }}
      accessibilityRole="button"
      onPress={handlePress}
      style={styles.container}
    >
      <View style={styles.leftContainer}>
        <CountryFlag currencyCode={currency.id} />
        <View style={styles.nameContainer}>
          <ThemedText type="defaultSemiBold">{currency.id}</ThemedText>
          <ThemedText type="small" style={styles.currencyName}>
            {i18n.t(`currency.${currency.id}`)}
          </ThemedText>
        </View>
      </View>

      {isSelected ? (
        <Icon
          name="check-circle"
          size={28}
          color={getColor("text", colorScheme)}
        />
      ) : (
        <Icon name="circle" size={28} color={getColor("border", colorScheme)} />
      )}
    </Pressable>
  );
};
