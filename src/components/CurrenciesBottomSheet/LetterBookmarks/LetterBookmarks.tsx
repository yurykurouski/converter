import { FlashList } from "@shopify/flash-list";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import { View } from "react-native";
import {
  Gesture,
  GestureDetector,
  Pressable,
} from "react-native-gesture-handler";
import Animated, { runOnJS, SharedValue, useAnimatedStyle } from "react-native-reanimated";

import { ThemedText } from "@/src/components";
import { useBottomSheetContext } from "@/src/context/BottomSheetContext";
import { useAppColorScheme } from "@/src/hooks";
import { CurrencyFiat } from "@/src/types";

import { getStyles } from "./styles";

type LetterBookmarksProps = {
  letters: { letter: string; index: number }[];
  itemsToLetters: Record<number, number>;
  contentHeight: SharedValue<number>;
};

export const LetterBookmarks = forwardRef<
  FlashList<CurrencyFiat>,
  LetterBookmarksProps
>(({ letters, itemsToLetters }, ref) => {
  const colorScheme = useAppColorScheme();

  const { scrollOffset } = useBottomSheetContext();

  const containerRef = useRef<View>(null);

  const styles = getStyles(colorScheme);

  const [height, setHeight] = useState(0);

  const animStyle = useAnimatedStyle(() => {
    if (!scrollOffset) {
      return {};
    }

    const intemIndex = Math.floor(scrollOffset?.value / 62); //62 is the height of the item
    const letterIndex = itemsToLetters[intemIndex];

    if (letterIndex === undefined) {
      return {};
    }

    return {
      top: (height / letters.length) * letterIndex + 4, //4 is the vertical margin
    };
  });

  const handleScroll = (index: number) => {
    if (ref && "current" in ref && ref.current) {
      ref.current.scrollToIndex({
        index: index,
      });
    }
  };

  useLayoutEffect(() => {
    containerRef.current?.measure(
      (
        _x: number,
        _y: number,
        _width: number,
        height: number,
        _pageX: number,
        _pageY: number
      ) => {
        setHeight(height);
      }
    );
  });

  // eslint-disable-next-line sonarjs/new-cap
  const dragGesture = Gesture.Pan().onUpdate((e) => {
    const { y } = e;

    const index = Math.floor(y / (height / letters.length));

    if (index < 0 || index >= letters.length) {
      return;
    }

    runOnJS(handleScroll)(letters[index].index);
  });

  return (
    <GestureDetector gesture={dragGesture}>
      <View
        style={styles.container}
        pointerEvents="box-none"
        ref={containerRef}
      >
        <Animated.View style={[styles.activeLetterContainer, animStyle]} />

        {letters.map((el) => {
          const handlePress = () => {
            handleScroll(el.index);
          };

          return (
            <Pressable
              accessibilityRole="button"
              key={el.letter}
              onPressIn={handlePress}
              style={styles.letterContainer}
            >
              <ThemedText type={"small"}>{el.letter}</ThemedText>
            </Pressable>
          );
        })}
      </View>
    </GestureDetector>
  );
});

LetterBookmarks.displayName = "LetterBookmarks";
