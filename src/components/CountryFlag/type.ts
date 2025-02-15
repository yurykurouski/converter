import { flags } from "@/src/assets/images/flags";

export type CountryFlagProps = {
  currencyCode: keyof typeof flags;
  size?: number;
};
