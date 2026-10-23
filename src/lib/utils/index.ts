import { RecurrenceEnum } from "../../enum";

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
}): number => isNaNumber(value) * fromCents(isNaNumber(percentage));

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
}): { value: number; percentage: number; percentageValue: number } => {
  const newValue = isNaNumber(value);
  const newPercentage = isNaNumber(percentage);
  const percentageValue = fromCents(newValue * newPercentage);
  const valuePercentage = newValue - fromCents(value * percentage);

  return {
    percentageValue,
    value: valuePercentage,
    percentage: newPercentage,
  };
};

/**
 * @example
 * formatePrice({ value: 2300, currency: 'EUR', locale: 'fr' }) // 23.00 €
 */
export const formatePrice = ({
  value,
  currency,
  locale = "en",
  isDivide = false,
  maximumFractionDigits = 2,
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

interface PropsInterest {
  amountTotal: number;
  interest: number;
  scheduleCount: number;
  recurrence: RecurrenceEnum;
}

export interface CalculateInterestResult {
  interest: number;
  amountTotal: number;
  interestRecurrence: number;
  recurrence: RecurrenceEnum;
  amountInterestRecurrence: number;
  amountRecurrence: number;
  interestTotal: number;
  amountInterestTotal: number;
}

/**
 * Répartit un montant et ses intérêts simples sur un nombre d'échéances.
 * @example
 * calculateInterest({ amount: 500, interest: 3, schedule: 10 }) // 500€, 3%, 10 mois
 * {
 *   amountRecurrence: 50, ==> 50€ / mois
 *   interestRecurrence: 1.5, ==> 1.5€ / mois
 *   interestTotal: 15, ==> 15€ / 10 mois
 *   amountInterestRecurrence: 51.5, ==> 51.5€ / mois
 *   amountInterestTotal: 515, ==> 515€ / 10 mois
 * }
 */
export const calculateInterest = ({
  amountTotal,
  interest,
  scheduleCount,
  recurrence,
}: PropsInterest): CalculateInterestResult => {
  const safeAmount = isNaNumber(Number(amountTotal));
  const rate = isNaNumber(Number(interest)) / 100;
  const empty: CalculateInterestResult = {
    recurrence,
    amountTotal: Number(amountTotal),
    interest: Number(interest),
    interestRecurrence: 0,
    amountInterestRecurrence: 0,
    amountRecurrence: 0,
    interestTotal: 0,
    amountInterestTotal: 0,
  };

  if (!Number.isFinite(Number(scheduleCount)) || Number(scheduleCount) <= 0) {
    return empty;
  }

  const amountRecurrence = safeAmount / Number(scheduleCount);
  const interestRecurrence = amountRecurrence * rate;

  return {
    interest,
    amountTotal,
    recurrence,
    amountRecurrence,
    interestRecurrence,
    amountInterestRecurrence: amountRecurrence + interestRecurrence,
    interestTotal: interestRecurrence * Number(scheduleCount),
    amountInterestTotal: safeAmount * (1 + rate),
  };
};
