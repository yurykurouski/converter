import React, { createContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

export const BottomSheetContext = createContext<
  SharedValue<number> | undefined
>(undefined);

export const BottomSheetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const animatedIndex = useSharedValue(0);

  return (
    <BottomSheetContext.Provider value={animatedIndex}>
      {children}
    </BottomSheetContext.Provider>
  );
};
