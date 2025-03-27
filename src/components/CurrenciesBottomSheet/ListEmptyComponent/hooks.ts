import { useScrollEventsHandlersDefault } from "@gorhom/bottom-sheet";
import {
  Scrollable,
  ScrollEventHandlerCallbackType,
} from "@gorhom/bottom-sheet/lib/typescript/types";
import { RefObject } from "react";
import { SharedValue, useWorkletCallback } from "react-native-reanimated";

import { useBottomSheetContext } from "@/src/context/BottomSheetContext";

export const useCustomScrollEventsHandlers = (
  ref: RefObject<Scrollable>,
  contentOffsetY: SharedValue<number>
): ReturnType<typeof useScrollEventsHandlersDefault> => {
  const { scrollOffset } = useBottomSheetContext();

  const { handleOnScroll, ...handlers } = useScrollEventsHandlersDefault(
    ref,
    contentOffsetY
  );

  const customHandleOnScroll: ScrollEventHandlerCallbackType<never> =
    useWorkletCallback((event, context: never) => {
      if (scrollOffset) {
        scrollOffset.value = event.contentOffset.y;
      }
      handleOnScroll?.(event, context);
    });

  return {
    ...handlers,
    handleOnScroll: customHandleOnScroll,
  };
};
