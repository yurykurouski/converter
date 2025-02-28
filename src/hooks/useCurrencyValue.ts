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
}: TUseCurrencyValueProps): string => {
  if (!selectedCurrency || !selectedCurrencyValue) {
    return "";
  }

  if (selectedCurrency === currencyName) {
    return selectedCurrencyValue;
  }

  const sourceRate = rates[selectedCurrency];

  const valueInUSD = Number(selectedCurrencyValue) / Number(sourceRate);

  const valueInTargetCurrency = valueInUSD * Number(rates[currencyName]);

  const roundedValue =
    Math.round((valueInTargetCurrency + Number.EPSILON) * 100) / 100;

  return roundedValue.toString();
};
