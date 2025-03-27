import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
} from "./availableCurrencies";

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

export type CurrencyType = "fiat" | "crypto";

type Currency = {
  id: string;
  name: string;
  min_size?: string;
  color?: string;
  type: CurrencyType;
}

export type { Currency, CurrencyCrypto, CurrencyFiat };
