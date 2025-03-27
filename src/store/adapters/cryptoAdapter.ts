import { Currency, CurrencyCrypto } from "@/src/types";

export const cryptoAdapter = (currencies: CurrencyCrypto[]): Currency[] => {
    return currencies.map((currency) => ({
        id: currency.code,
        color: currency.color,
        name: currency.name,
        type: "crypto",
    }));
}