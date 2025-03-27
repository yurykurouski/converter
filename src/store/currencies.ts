import { StateCreator } from "zustand";

import { getCryptoCurrencies, getFiatCurrencies } from "@/src/services/rates";
import {
  Currency,
  CurrencyType,
  EAvailableCryptoNames,
  EAvailableFiatNames
} from "@/src/types";

import { cryptoAdapter } from "./adapters/cryptoAdapter";
import { fiatAdapter } from "./adapters/fiatAdapter";

export type CurrenciesSlice = {
  currenciesFiat: Currency[];
  currenciesCrypto: Currency[];
  selectedFiatCurrencies: string[];
  selectedCryptoCurrencies: string[];
  selectedCurrency?: string;
  selectedCurrencyValue?: string;

  isLoading: boolean;

  selectedCurrencyType: CurrencyType;

  selectFiatCurrency: (currencyId: string) => void;
  loadFiatCurrencies: () => Promise<void>;
  loadCryptoCurrencies: () => Promise<void>;
  selectCurrency: (currencyId: string) => void;
  setSelectedCurrencyValue: (value: string) => void;
  setSelectedCurrencyType: (currencyType: CurrencyType) => void;
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

  selectedCurrency: undefined,
  selectedCurrencyValue: undefined,

  isLoading: false,

  selectedCurrencyType: "fiat",

  selectFiatCurrency: (currencyId: string) => {
    const isSelected = get().selectedFiatCurrencies.includes(currencyId);

    const newCurrencies = isSelected
      ? get().selectedFiatCurrencies.filter((id) => id !== currencyId)
      : [...get().selectedFiatCurrencies, currencyId];

    set({ selectedFiatCurrencies: newCurrencies });
  },
  loadFiatCurrencies: async () => {
    set({ isLoading: true });

    try {
      const { data } = await getFiatCurrencies();

      const availableFiatCurrencies = data.filter(
        (currency) => !!EAvailableFiatNames[currency.id]
      );

      set({ currenciesFiat: fiatAdapter(availableFiatCurrencies) });
    } catch (error) {
      console.error("Error loading fiat currencies", error);
    } finally {
      set({ isLoading: false });
    }
  },
  loadCryptoCurrencies: async () => {
    set({ isLoading: true });

    try {
      const { data } = await getCryptoCurrencies();

      const availableCryptoCurrencies = data.filter(
        (currency) => !!EAvailableCryptoNames[currency.code]
      );

      set({ currenciesCrypto: cryptoAdapter(availableCryptoCurrencies) });
    } catch (error) {
      console.error("Error loading crypto currencies", error);
    } finally {
      set({ isLoading: false });
    }
  },
  selectCurrency: (currencyId: string) => {
    set({ selectedCurrency: currencyId });
  },
  setSelectedCurrencyValue: (value: string) => {
    value = value.replace(/,$/, ".");

    if (!/^\d*(?:\.\d*)?$/.test(value)) {
      return;
    }

    if (value.startsWith("0") && value[1] !== "." && value.length > 1) {
      value = "0." + value.slice(1);
    }

    if (value.startsWith(".")) {
      value = "0" + value;
    }

    if (value.length >= 12) {
      return;
    }

    set({ selectedCurrencyValue: value });
  },
  setSelectedCurrencyType: (currencyType: CurrencyType) => {
    set({ selectedCurrencyType: currencyType });
  }
});
