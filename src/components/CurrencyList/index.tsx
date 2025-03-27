import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

import {
  CurrencyListItem,
  ListFooterComponent,
  UIItemSeparatorComponent,
} from "@/src/components";
import useStore from "@/src/store";
import store from "@/src/store";

import { styles } from "./styles";

export const CurrencyList = () => {
  const { selectedFiatCurrencies } = useStore();

  const renderItem = ({ item }: { item: string }) => (
    <CurrencyListItem item={item} />
  );

  const { selectedCurrencyValue } = store.getState();

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        data={selectedFiatCurrencies}
        renderItem={renderItem}
        ItemSeparatorComponent={UIItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        automaticallyAdjustKeyboardInsets
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        estimatedItemSize={60}
        extraData={selectedCurrencyValue}
      />
    </View>
  );
};
