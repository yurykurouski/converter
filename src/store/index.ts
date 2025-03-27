import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { createCurrenciesSlice, CurrenciesSlice } from "./currencies";
import { createRatesSlice, RatesSlice } from "./rates";

type AppState = RatesSlice &
  CurrenciesSlice & {
    isReady: boolean;
    init: () => Promise<void>;
  };

const useStore = create(
  persist<AppState>(
    (set, get, getState) => ({
      ...createRatesSlice(set, get, getState),
      ...createCurrenciesSlice(set, get, getState),
      isReady: false,
      init: async () => {
        await get().loadRates();
        await get().loadFiatCurrencies();
        await get().loadCryptoCurrencies();

        await loadAsync({
          SpaceMono: require("@/src/assets/fonts/SpaceMono-Regular.ttf"),
        });

        SplashScreen.hideAsync();
        set({ isReady: true });
      },
    }),
    {
      name: "app-storage1",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        ...state,
        isLoading: false,
        isReady: false,
      }),
    }
  )
);

export default useStore;
