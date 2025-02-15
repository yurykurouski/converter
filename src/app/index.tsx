import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CurrenciesBottomSheet, CurrencyList } from "../components";

export default function Home() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <CurrencyList />
      <CurrenciesBottomSheet />
    </View>
  );
}

const useStyles = () => {
  const { bottom } = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: bottom,
    },
  });
};
