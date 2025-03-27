import { TextInput, View } from "react-native";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CrossButton } from "@/src/components/UI";
import { useAppColorScheme } from "@/src/hooks";
import i18n from "@/src/i18n";
import { getColor } from "@/src/utils";
import { isAndroid } from "@/src/utils/platform";

import { getStyles } from "./styles";
import { BottomSheetSearchProps } from "./types";

export const BottomSheetSearch = (props: BottomSheetSearchProps) => {
  const { searchValue, setSearchValue } = props;

  const colorScheme = useAppColorScheme();
  const styles = getStyles(colorScheme);

  const { bottom } = useSafeAreaInsets();
  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => {
    if (isAndroid) return {};

    if (keyboard.height.value <= bottom) {
      return {
        marginBottom: 0,
      };
    }
    return {
      marginBottom: keyboard.height.value - 34,
    };
  });

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <Animated.View style={[styles.inputContainer, animatedStyles]}>
      <View style={styles.inputWrapper}>
        <TextInput
          accessibilityLabel={i18n.t("currencyInput.accessibilityHint")}
          accessibilityHint={i18n.t("currencyInput.accessibilityHint")}
          value={searchValue}
          onChangeText={setSearchValue}
          style={styles.input}
          clearButtonMode="while-editing"
          placeholder={i18n.t("currencyInput.placeholder")}
          placeholderTextColor={getColor("text", colorScheme)}
        />

        {searchValue && isAndroid && (
          <CrossButton
            onPress={handleClear}
          />
        )}
      </View>
    </Animated.View>
  );
};
