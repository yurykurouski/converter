import { Image } from "expo-image";
import { View } from "react-native";

import { flags } from "@/src/assets/images/flags";
import { useAppColorScheme } from "@/src/hooks";

import { getStyles } from "./styles";
import { CountryFlagProps } from "./type";

export const CountryFlag = (props: CountryFlagProps) => {
  const { currencyCode, size } = props;

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme, size);

  const flagImg = flags[currencyCode];

  return (
    <View style={styles.flagContainer}>
      <Image source={flagImg} style={styles.icon} />
    </View>
  );
};
