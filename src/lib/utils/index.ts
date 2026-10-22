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
  amount: number;
  interest: number;
  scheduleCount: number;
}

interface InterestResult {
  amountSchedule: number;
  interestSchedule: number;
  interestScheduleTotal: number;
  amountInterestSchedule: number;
  amountInterestScheduleTotal: number;
}

/**
 * Répartit un montant et ses intérêts simples sur un nombre d'échéances.
 * @example
 * calculInterest({ amount: 500, interest: 3, schedule: 10 }) // 500€, 3%, 10 mois
 * {
 *   amountSchedule: 50, ==> 50€ / mois
 *   interestSchedule: 1.5, ==> 1.5€ / mois
 *   interestScheduleTotal: 15, ==> 15€ / 10 mois
 *   amountInterestSchedule: 51.5, ==> 51.5€ / mois
 *   amountInterestScheduleTotal: 515, ==> 515€ / 10 mois
 * }
 */
export const calculInterest = ({
  amount,
  interest,
  scheduleCount,
}: PropsInterest): InterestResult => {
  const safeAmount = isNaNumber(amount);
  const rate = isNaNumber(interest) / 100;
  const empty: InterestResult = {
    amountSchedule: 0,
    interestSchedule: 0,
    interestScheduleTotal: 0,
    amountInterestSchedule: 0,
    amountInterestScheduleTotal: 0,
  };

  if (!Number.isFinite(scheduleCount) || scheduleCount <= 0) {
    return empty;
  }

  const amountSchedule = safeAmount / scheduleCount;
  const interestSchedule = amountSchedule * rate;

  return {
    amountSchedule,
    interestSchedule,
    amountInterestScheduleTotal: safeAmount * (1 + rate),
    interestScheduleTotal: interestSchedule * scheduleCount,
    amountInterestSchedule: amountSchedule + interestSchedule,
  };
};
