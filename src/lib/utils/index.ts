interface Props {
  value: number;
  isDivide?: boolean;
  currency: string;
  locale?: string;
  maximumFractionDigits?: number;
}

const isNaNumber = (value: number) => (!isNaN(Number(value)) ? value : 0);
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

/**
 * @example
 * formatePrice({ value: 2300, currency: 'EUR', locale: 'fr' }) // 23.00 €
 */
export const formatePrice = ({
  value,
  currency,
  locale = "en",
  isDivide = false,
  maximumFractionDigits = 3,
}: Props) => {
  const newValue = isNaNumber(value);
  const numberCal = isDivide ? fromCents(newValue) : newValue;

  const lang = ["fr", "it"].includes(locale.toLowerCase()) ? "de" : locale;
  return new Intl.NumberFormat(lang, {
    currency,
    style: "currency",
    notation: "standard",
    maximumFractionDigits,
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
  const newValue = isNaNumber(value);
  const result = new Intl.NumberFormat(locale, {
    style: "percent",
    notation: "standard",
    maximumFractionDigits: 1,
  }).format(newValue / 100);
  return result;
};

/**
 * @example
 * capitalizeFirstLetter("john doe") // "John Doe"
 */
export const capitalizeFirstLetter = (value: string): string => {
  // Séparer le nom complet en parties (prénom et nom)
  const parties = value?.split(" ");
  // Appliquer la capitalisation à chaque partie
  if (parties?.length > 0) {
    const partiesFormatees = parties?.map(
      (item) => item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase(),
    );
    // Rejoindre les parties avec un espace
    return partiesFormatees.join(" ");
  }
  return "";
};
