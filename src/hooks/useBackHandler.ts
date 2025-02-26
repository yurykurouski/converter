import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useBackHandler = (backAction: () => boolean) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [backAction]);
};
