export type Currency = {
  name: string;
  symbol: string;
  code: CurrencyEnum;
};

/**
 * Currency codes used in the system
 */
export enum CurrencyEnum {
  USD = "USD",
  GBP = "GBP",
  XAF = "XAF",
  EUR = "EUR",
  XOF = "XOF",
  CHF = "CHF",
  CAD = "CAD",
}

/**
 * Currencies options
 */
export const currencies: Currency[] = [
  { code: CurrencyEnum.USD, symbol: "$", name: "US Dollar" },
  { code: CurrencyEnum.EUR, symbol: "€", name: "Euro" },
  { code: CurrencyEnum.XAF, symbol: "FCFA", name: "CFA Franc BEAC" },
  { code: CurrencyEnum.XOF, symbol: "CFA", name: "CFA Franc BCEAO" },
  { code: CurrencyEnum.GBP, symbol: "£", name: "British Pound" },
  { code: CurrencyEnum.CAD, symbol: "C$", name: "Canadian Dollar" },
  { code: CurrencyEnum.CHF, symbol: "CHF", name: "Swiss Franc" },
];
