import {
  getYear,
  Locale,
  addWeeks,
  isFuture,
  isSameDay,
  isThisYear,
  startOfDay as startOfDayFns,
  subDays as subDaysFns,
  addDays as addDaysFns,
  addYears as addYearsFns,
  format as formatDateFns,
  addMonths as addMonthsFns,
} from "date-fns";
import { UTCDate, utc } from "@date-fns/utc";
import { de, enUS, es, fr, it, ru, enGB } from "date-fns/locale";
import { RecurrenceEnum } from "../enum";
import { DateLike } from "../index";
interface PropsRecurrence {
  date: Date;
  duration?: number;
  isRecurrence: boolean;
  recurrence: RecurrenceEnum;
}

const dataFnsLocale: Partial<Record<string, Locale>> = {
  es: es,
  ru: ru,
  it: it,
  fr: fr,
  en: enGB,
  enUS: enUS,
  de: de,
};

export const dateTimeNowUtc = () => new Date();

/**
 * @example
 * formateDate("2026-01-01T09:00:00Z", "en-US"); // "1 Jan 2026 09:00"
 */
export const formateDate = (date: Date, locale: string) => {
  const formatString = isThisYear(date)
    ? locale === "en"
      ? "MMM dd, p"
      : "dd MMM p"
    : isFuture(date)
      ? "PPPp"
      : "Pp";

  return formatDateFns(date, formatString, {
    locale: dataFnsLocale[locale],
  });
};

/**
 * @example
 * formateddMMYYYY("2026-01-01", "en-US"); // "1 January 2026"
 */
export const formateddMMYYYY = (date: DateLike, locale: string) => {
  return formatDateFns(date, "PPP", {
    locale: dataFnsLocale[locale],
  });
};

/**
 * @example
 * formateUnixIntegerPPp(1792794512, "en"); // "24 Oct 2026, 00:28"
 */
export const formateUnixIntegerPPp = (value: number, locale: string) => {
  return formatDateFns(new Date(Number(value) * 1000), "PPp", {
    locale: dataFnsLocale[locale],
  });
};

/**
 * @example
 * formateddMMYYYYHHmm("2026-01-01", "en-US"); // "1 January 2026 00:00"
 */
export const formateddMMYYYYHHmm = (date: DateLike, locale: string) => {
  return formatDateFns(date, "PPPp", {
    locale: dataFnsLocale[locale],
  });
};

/**
 * @example
 * formateHHmm("2026-01-01T00:00:00Z", "en-US"); // "00:00"
 */
export const formateHHmm = (date: Date, locale: string) =>
  formatDateFns(date, "p", { locale: dataFnsLocale[locale] });

/**
 * @example
 * formateHH("2026-01-01T00:00:00Z"); // "00:00"
 */
export const formateHH = (date: Date) => formatDateFns(date, "HH");

/**
 * @example
 * formatDateDDMMYYToUtc("2026-01-01T00:00:00Z", "en"); // "01/01/2026"
 */
export const formatDateDDMMYYToUtc = (date: Date, locale: string) =>
  formatDateFns(date, "P", { locale: dataFnsLocale[locale] });

/**
 * @example
 * formatDateFnsToDdMMYYYY("2026-01-01T00:00:00Z"); // "01-01-2026"
 */
export const formatDateFnsToDdMMYYYY = (date: Date) =>
  formatDateFns(date, "dd-MM-yyyy");

/**
 * @example
 * formatDateFnsToDdMMYYYYHHmmss("2026-01-01T00:00:00Z"); // "01-01-2026 00:00:00"
 */
export const formatDateFnsToDdMMYYYYHHmm = (date: Date) =>
  formatDateFns(date, "dd-MM-yyyy HH:mm");

/**
 * @example
 * formateDateMMyyyy("2026-01-01T00:00:00Z"); // "012026"
 */
export const formateDateMMyyyy = (date: Date) => formatDateFns(date, "MMyyyy");

/**
 * @example
 * formateToyyyy("2026-01-01T00:00:00Z"); // 2026
 */
export const formateToyyyy = (date: Date) => getYear(date);

/**
 * @example
 * formateDateUnixInteger("2026-01-01T00:00:00Z"); // 1719168000
 */
export const formateDateUnixInteger = (date: Date) =>
  Number(formatDateFns(date, "T"));

/**
 * @example
 * addDaysToTimeNowUtcDate(1); // 2026-01-02
 */
export const addDaysToTimeNowUtcDate = (value: number) =>
  addDaysFns(dateTimeNowUtc(), Number(value));

/**
 *
 * @example
 * dateTimeNowUtcUnixInteger(); // 1719168000
 */
export const dateTimeNowUtcUnixInteger = () =>
  Number(formatDateFns(dateTimeNowUtc(), "T"));

/**
 * @example
 * addMonthsToTimeNowUtcDate(1); // 1719168000
 */
export const addMonthsToTimeNowUtcUnixInteger = (month: number) =>
  Number(formatDateFns(addMonthsFns(dateTimeNowUtc(), Number(month)), "T"));

/**
 * @example
 * addDaysToTimeNowUtcUnixInteger(1); // 1719168000
 */
export const addDaysToTimeNowUtcUnixInteger = (value: number) =>
  Number(formatDateFns(addDaysFns(dateTimeNowUtc(), Number(value)), "T"));

/**
 * @example
 * addMonthsToTimeDateNowUtc(1); // 2026-01-02
 */
export const addMonthsToTimeDateNowUtc = (value: number) =>
  addMonthsFns(dateTimeNowUtc(), Number(value));

/**
 * @example
 * addDaysToTimeDateNowUtc(1); // 2026-01-02
 */
export const addDaysToTimeDateNowUtc = (value: number) =>
  addDaysFns(dateTimeNowUtc(), Number(value));

/**
 * @example
 * addDaysToTimeDateStartOfDayNowUtc(1); // 2026-01-02 00:00:00
 */
export const addDaysToTimeDateStartOfDayNowUtc = (value: number) =>
  new Date(
    startOfDayFns(addDaysFns(new UTCDate(dateTimeNowUtc()), Number(value))),
  );

/**
 * @example
 * addMonthsToTimeDate(new Date(), 1); // 2026-01-02
 */
export const addMonthsToTimeDate = (date: Date, value: number) =>
  addMonthsFns(date, Number(value));

/**
 * @example
 * addDaysToTimeDate(new Date(), 1); // 2026-01-02
 */
export const addDaysToTimeDate = (date: Date, value: number) =>
  addDaysFns(date, Number(value));

/**
 * @example
 * substrateDaysToTimeDateNowUtc(1); // 2026-01-02
 */
export const substrateDaysToTimeDateNowUtc = (value: number) =>
  subDaysFns(dateTimeNowUtc(), Number(value));

const nextOccurrenceByRecurrence: Record<
  RecurrenceEnum,
  (date: Date, duration: number) => Date
> = {
  [RecurrenceEnum.Daily]: addDaysToTimeDate,
  [RecurrenceEnum.Weekly]: addWeeks,
  [RecurrenceEnum.Monthly]: addMonthsToTimeDate,
  [RecurrenceEnum.Yearly]: addYearsFns,
};

/**
 * @example
 * recurrenceDate({ date: futureDate, recurrence: RecurrenceEnum.Monthly, isRecurrence: true })
 * // futureDate, when it is still ahead of now
 */
export const recurrenceDate = ({
  date,
  recurrence,
  duration = 1,
  isRecurrence = false,
}: PropsRecurrence): Date | null => {
  if (!isRecurrence) {
    return null;
  }

  const dateInit = date instanceof Date ? date : new Date(date);
  const now = dateTimeNowUtc();

  if (dateInit.getTime() > now.getTime()) {
    return dateInit;
  }

  if (isSameDay(dateInit, now)) {
    return now;
  }
  const nextDate = nextOccurrenceByRecurrence[recurrence](now, duration);

  return nextDate;
};
