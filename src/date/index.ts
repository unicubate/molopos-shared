import {
  addDays as addDaysFns,
  addMonths as addMonthsFns,
  addWeeks,
  addYears as addYearsFns,
  format as formatDateFns,
  getYear,
  Locale,
  setDate,
} from "date-fns";
import { de, enUS, es, fr, it, ru, enGB } from "date-fns/locale";
import { RecurrenceEnum } from "../enum";
import { DateLike, Numberlike } from "../index";
import { DateTime } from "luxon";
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
 * formateDate("2026-01-01", "en-US"); // "1 Jan 2026 00:00"
 */
export const formateDate = (date: Date, locale: string) => {
  const localeFormat = locale !== "en" ? "dd MMM p" : "MMM dd, p";
  const isYearControle = getYear(dateTimeNowUtc()) >= getYear(date);
  return formatDateFns(date, isYearControle ? localeFormat : "P", {
    locale: dataFnsLocale[locale],
  });
};

/**
 * @example
 * formateddLLLyyyy("2026-01-01", "en-US"); // "1 Jan 2026"
 */
export const formateddLLLyyyy = (date: DateLike, locale: string) => {
  return formatDateFns(date, "PPp", {
    locale: dataFnsLocale[locale],
  });
};

/**
 * @example
 * formateHHmm("2026-01-01", "en-US"); // "00:00"
 */
export const formateHHmm = (date: Date, locale: string) =>
  formatDateFns(date, "p", { locale: dataFnsLocale[locale] });

/**
 * @example
 * formatDateDDMMYYToUtc("2026-01-01", "en"); // "01/01/2026"
 */
export const formatDateDDMMYYToUtc = (date: Date, locale: string) =>
  formatDateFns(date, "P", { locale: dataFnsLocale[locale] });

/**
 * @example
 * formatDateFnsToDdMMYYYY("2026-01-01"); // "01-01-2026"
 */
export const formatDateFnsToDdMMYYYY = (date: Date) =>
  formatDateFns(date, "dd-MM-yyyy");

/**
 * @example
 * formatDateFnsToDdMMYYYYHHmmss("2026-01-01"); // "01-01-2026 00:00:00"
 */
export const formatDateFnsToDdMMYYYYHHmm = (date: Date) =>
  formatDateFns(date, "dd-MM-yyyy HH:mm");

/**
 * @example
 * formateToyyyy("2026-01-01"); // 2026
 */
export const formateToyyyy = (date: Date) => getYear(date);

/**
 * @example
 * addDaysToTimeNowUtcDate(1); // 2026-01-02
 */
export const addDaysToTimeNowUtcDate = (dayNumber: number) =>
  addDaysFns(dateTimeNowUtc(), dayNumber);

/**
 *
 * @example
 * dateTimeNowUtcUnixInteger(); // 1719168000
 */
export const dateTimeNowUtcUnixInteger = () =>
  Number(formatDateFns(dateTimeNowUtc(), "T"));

/**
 * @example
 * formateDateUnixInteger("2026-01-01"); // 1719168000
 */
export const formateDateUnixInteger = (date: Date) =>
  Number(formatDateFns(date, "T"));

/**
 * @example
 * recurrenceDate({ date: new Date(), recurrence: RecurrenceEnum.Monthly }) // 23/06/2026
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
  const dateNowUnix = dateTimeNowUtcUnixInteger();
  const dateUnix = formateDateUnixInteger(dateInit);
  const isFutureDate = dateUnix > dateNowUnix;

  const dateNowInit = isFutureDate ? dateInit : dateTimeNowUtc();

  switch (recurrence) {
    case RecurrenceEnum.Daily:
      return addDaysFns(dateNowInit, duration);
    case RecurrenceEnum.Weekly:
      return addWeeks(dateNowInit, duration);
    case RecurrenceEnum.Monthly: {
      if (isFutureDate) {
        return addMonthsFns(dateNowInit, duration);
      }
      const now = dateTimeNowUtc();
      let nextOccurrence = setDate(now, dateInit.getDate());
      if (formateDateUnixInteger(nextOccurrence) <= dateNowUnix) {
        nextOccurrence = addMonthsFns(nextOccurrence, duration);
      }
      return nextOccurrence;
    }
    case RecurrenceEnum.Yearly: {
      if (isFutureDate) {
        return addYearsFns(dateNowInit, duration);
      }
      let nextOccurrence = addYearsFns(dateInit, duration);
      if (formateDateUnixInteger(nextOccurrence) <= dateNowUnix) {
        nextOccurrence = addYearsFns(nextOccurrence, duration);
      }
      return nextOccurrence;
    }
  }
};