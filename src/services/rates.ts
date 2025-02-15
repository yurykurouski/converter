import { CurrencyCrypto, CurrencyFiat } from "../types";
import apiClient from "./client";

export type TRatesResponse = {
  [key: string]: number;
};

export type TFiatCurrenciesResponse = {
  data: CurrencyFiat[];
};

export type TCryptoCurrenciesResponse = {
  data: CurrencyCrypto[];
};

export const getRates = async () => {
  const response = await apiClient.get("v2/exchange-rates");

  return response.data;
};
export const getFiatCurrencies = async () => {
  const response = await apiClient.get<TFiatCurrenciesResponse>(
    "v2/currencies"
  );

  return response.data;
};
export const getCryptoCurrencies = async () => {
  const response = await apiClient.get<TCryptoCurrenciesResponse>(
    "/v2/currencies/crypto"
  );

  return response.data;
};
