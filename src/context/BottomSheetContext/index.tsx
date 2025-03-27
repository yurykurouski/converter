import React, { createContext, useContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

export const BottomSheetContext = createContext<
  | { animatedIndex?: SharedValue<number>; scrollOffset?: SharedValue<number> }
  | undefined
>({});

export const BottomSheetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const animatedIndex = useSharedValue(0);
  const scrollOffset = useSharedValue(0);

  const value = React.useMemo(
    () => ({ animatedIndex, scrollOffset }),
    [animatedIndex, scrollOffset]
  );

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);

  if (context === undefined) {
    throw new Error(
      "useBottomSheetContext must be used within a BottomSheetProvider"
    );
  }

  return context;
};
