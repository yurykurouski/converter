import apiClient from "./client";

export const getRates = async () => {
  const response = await apiClient.get("v2/exchange-rates");

  return response.data;
};
export const getFiatCurrencies = async () => {
  const response = await apiClient.get("v2/currencies");

  return response.data;
};
export const getCryptoCurrencies = async () => {
  const response = await apiClient.get("/v2/currencies/crypto");

  return response.data;
};
