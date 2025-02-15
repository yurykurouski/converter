type TUseCurrencyValueProps = {
  rates: Record<string, string>;
  selectedCurrency?: string;
  selectedCurrencyValue?: string;
  currencyName: string;
};

export const useCurrencyValue = ({
  rates,
  selectedCurrency,
  selectedCurrencyValue,
  currencyName,
}: TUseCurrencyValueProps) => {
  if (!selectedCurrency || !selectedCurrencyValue) {
    return "";
  }

  const testRate = rates[selectedCurrency];

  const inUSD = Number(selectedCurrencyValue) / Number(testRate);

  const test = inUSD * Number(rates[currencyName]);
  const rounded = Math.round((test + Number.EPSILON) * 100) / 100;

  const value = rounded.toString();

  return value;
};
