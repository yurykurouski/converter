import Icon from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CountryFlag, ThemedText } from "@/src/components";
import { useAppColorScheme } from "@/src/hooks";
import store from "@/src/store";
import { debounce, getColor } from "@/src/utils";

import { getStyles } from "./styles";

export const CurrencyBottomSheetItem = (props) => {
  const { currency } = props;

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
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityRole="button"
      onPress={handlePress}
      style={styles.container}
    >
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <CountryFlag currencyCode={currency.id} />
        </View>
        <View style={styles.nameContainer}>
          <ThemedText type="defaultSemiBold">{currency.id}</ThemedText>
          <ThemedText type="small" style={styles.currencyName}>
            {currency.name}
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
    </TouchableOpacity>
  );
};
