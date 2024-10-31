import { StateCreator } from "zustand";

import { getCryptoCurrencies, getFiatCurrencies } from "@/src/services/rates";
import { EAvailableCryptoNames, EAvailableFiatNames } from "@/src/types";

export type CurrenciesSlice = {
  currenciesFiat: {
    id: string;
    min_size: string;
    name: string;
  }[];
  currenciesCrypto: {
    code: string;
    color: string;
    exponent: number;
    name: string;
  }[];
  selectedFiatCurrencies: string[];
  selectedCryptoCurrencies: string[];
  isLoading: boolean;

  selectFiatCurrency: (currencyId: string) => void;
  loadFiatCurrencies: () => Promise<void>;
  loadCryptoCurrencies: () => Promise<void>;
};

export const createCurrenciesSlice: StateCreator<
  CurrenciesSlice,
  [],
  [],
  CurrenciesSlice
> = (set, get) => ({
  currenciesFiat: [],
  currenciesCrypto: [],
  selectedFiatCurrencies: [],
  selectedCryptoCurrencies: [],
  isLoading: false,
  selectFiatCurrency: (currencyId: string) => {
    const isSelected = get().selectedFiatCurrencies.includes(currencyId);

    const newCurrencies = isSelected
      ? get().selectedFiatCurrencies.filter((id) => id !== currencyId)
      : [...get().selectedFiatCurrencies, currencyId];

    set({ selectedFiatCurrencies: newCurrencies });
  },
  loadFiatCurrencies: async () => {
    set({ isLoading: true });
    const { data } = await getFiatCurrencies();

    const availableFiatCurrencies = data.filter(
      (currency) => !!EAvailableFiatNames[currency.id]
    );

    set({ currenciesFiat: availableFiatCurrencies });
    set({ isLoading: false });
  },
  loadCryptoCurrencies: async () => {
    const { data } = await getCryptoCurrencies();

    const availableCryptoCurrencies = data.filter(
      (currency) => !!EAvailableCryptoNames[currency.code]
    );

    set({ currenciesCrypto: availableCryptoCurrencies });
  },
});
