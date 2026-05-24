/**
 * @example
 * fromCents(2300) // 23
 */
export const fromCents = (value: number | string): number =>
  Number(value) / 100;

/**
 * @example
 * toCents(23) // 2300
 */
export const toCents = (value: number | string): number => Number(value) * 100;

/**
 * @example
 * calculVat({ value: 2300, percentage: 20 }) // 460
 */
export const calculVat = ({
  value,
  percentage,
}: {
  value: number;
  percentage: number;
}): number => (percentage > 0 ? value * fromCents(percentage) : 0);

/**
 * @example
 * calculDiscount({ value: 2300, percentage: 20 }) // 460
 */
export const calculDiscount = ({
  value,
  percentage,
}: {
  value: number;
  percentage: number;
}): number => (percentage > 0 ? fromCents(value * percentage) : 0);

interface Props {
  value: number;
  isDivide?: boolean;
  currency: string;
  locale?: string;
}

/**
 * @example
 * formatePrice({ value: 2300, currency: 'EUR', locale: 'fr' }) // 23.00 €
 */
export const formatePrice = ({
  value,
  currency,
  locale = "en",
  isDivide = false,
}: Props) => {
  if (isNaN(value)) return "—";
  const numberCal = isDivide ? fromCents(value) : value;

  const lang = ["fr", "it"].includes(locale.toLowerCase()) ? "de" : locale;
  return new Intl.NumberFormat(lang, {
    currency,
    style: "currency",
    notation: "standard",
    maximumFractionDigits: 1,
  }).format(numberCal);
};

/**
 * @example
 * formatPercent({ value: 20, locale: 'fr' }) // 20%
 */
export const formatPercent = ({
  value,
  locale,
}: {
  value: number;
  locale: string;
}) => {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    notation: "standard",
    maximumFractionDigits: 1,
  }).format(value / 100);
};
