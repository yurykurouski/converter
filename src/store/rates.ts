import { StateCreator } from "zustand";

import { getRates } from "../services/rates";

export type RatesSlice = {
  rates: Record<string, string>;
  isLoading: boolean;

  loadRates: () => Promise<void>;
};

export const createRatesSlice: StateCreator<RatesSlice, [], [], RatesSlice> = (
  set
) => ({
  rates: {},
  isLoading: false,
  loadRates: async () => {
    try {
      const { data } = await getRates();

      set({ rates: data.rates });
    } catch (error) {
      console.error("Error loading rates", error);
    }
  },
});
