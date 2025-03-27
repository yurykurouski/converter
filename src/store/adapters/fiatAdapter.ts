import { Currency, CurrencyFiat } from "@/src/types";

export const fiatAdapter = (currencies: CurrencyFiat[]): Currency[] => {
    return currencies.map((currency) => ({
        id: currency.id,
        name: currency.name,
        min_size: currency.min_size,
        type: "fiat",
    }));
}