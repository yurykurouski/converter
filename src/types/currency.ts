import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
} from "./availableCurrencies";

// type Currency = {
//   id: keyof typeof flags;
//   min_size: string;
//   name: string;
// };

type CurrencyFiat = {
  id: keyof typeof EAvailableFiatNames;
  min_size: string;
  name: string;
};

type CurrencyCrypto = {
  code: keyof typeof EAvailableCryptoNames;
  color: string;
  exponent: number;
  name: string;
};

type Currency = CurrencyFiat | CurrencyCrypto;

export type { Currency, CurrencyCrypto, CurrencyFiat };
