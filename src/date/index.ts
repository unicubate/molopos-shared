import {
  getYear,
  Locale,
  set,
  setDate,
  addWeeks,
  isFuture,
  isThisYear,
  startOfDay as startOfDayFns,
  subDays as subDaysFns,
  addDays as addDaysFns,
  addYears as addYearsFns,
  format as formatDateFns,
  addMonths as addMonthsFns,
} from "date-fns";
import { utc, UTCDate } from "@date-fns/utc";
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
 * formateDate("2026-01-01", "en-US"); // "1 Jan 2026 00:00"
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
 * formateddMMYYYYHHmm("2026-01-01", "en-US"); // "1 January 2026 00:00"
 */
export const formateddMMYYYYHHmm = (date: DateLike, locale: string) => {
  return formatDateFns(date, "PPPp", {
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
 * formateHH("2026-01-01"); // "00:00"
 */
export const formateHH = (date: Date) => formatDateFns(date, "HH");

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
 * formateDateMMyyyy("2026-01-01"); // "012026"
 */
export const formateDateMMyyyy = (date: Date) => formatDateFns(date, "MMyyyy");

/**
 * @example
 * formateToyyyy("2026-01-01"); // 2026
 */
export const formateToyyyy = (date: Date) => getYear(date);

/**
 * @example
 * addDaysToTimeNowUtcDate(1); // 2026-01-02
 */
export const addDaysToTimeNowUtcDate = (value: number) =>
  addDaysFns(dateTimeNowUtc(), value);

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
 * addMonthsToTimeNowUtcDate(1); // 1719168000
 */
export const addMonthsToTimeNowUtcUnixInteger = (month: number) =>
  Number(formatDateFns(addMonthsFns(dateTimeNowUtc(), month), "T"));

/**
 * @example
 * addDaysToTimeNowUtcUnixInteger(1); // 1719168000
 */
export const addDaysToTimeNowUtcUnixInteger = (value: number) =>
  Number(formatDateFns(addDaysFns(dateTimeNowUtc(), value), "T"));

/**
 * @example
 * addMonthsToTimeDateNowUtc(1); // 2026-01-02
 */
export const addMonthsToTimeDateNowUtc = (value: number) =>
  addMonthsFns(dateTimeNowUtc(), value);

/**
 * @example
 * addDaysToTimeDateNowUtc(1); // 2026-01-02
 */
export const addDaysToTimeDateNowUtc = (value: number) =>
  addDaysFns(dateTimeNowUtc(), value);

/**
 * @example
 * addDaysToTimeDateStartOfDayNowUtc(1); // 2026-01-02 00:00:00
 */
export const addDaysToTimeDateStartOfDayNowUtc = (value: number) =>
  new Date(startOfDayFns(addDaysFns(new UTCDate(dateTimeNowUtc()), value)));

/**
 * @example
 * addMonthsToTimeDate(new Date(), 1); // 2026-01-02
 */
export const addMonthsToTimeDate = (date: Date, value: number) =>
  addMonthsFns(date, value);

/**
 * @example
 * addDaysToTimeDate(new Date(), 1); // 2026-01-02
 */
export const addDaysToTimeDate = (date: Date, value: number) =>
  addDaysFns(date, value);

/**
 * @example
 * substrateDaysToTimeDateNowUtc(1); // 2026-01-02
 */
export const substrateDaysToTimeDateNowUtc = (value: number) =>
  subDaysFns(dateTimeNowUtc(), value);

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
      return addDaysToTimeDate(dateNowInit, duration);
    case RecurrenceEnum.Weekly:
      return addWeeks(dateNowInit, duration);
    case RecurrenceEnum.Monthly: {
      if (isFutureDate) {
        return addMonthsToTimeDate(dateNowInit, duration);
      }
      const now = dateTimeNowUtc();
      let nextOccurrence = setDate(now, dateInit.getDate());
      if (formateDateUnixInteger(nextOccurrence) <= dateNowUnix) {
        nextOccurrence = addMonthsToTimeDate(nextOccurrence, duration);
      }
      return nextOccurrence;
    }
    case RecurrenceEnum.Yearly: {
      if (isFutureDate) {
        return addYearsFns(dateNowInit, duration);
      }
      const now = dateTimeNowUtc();
      let nextOccurrence = set(now, {
        month: dateInit.getMonth(),
        date: dateInit.getDate(),
      });
      if (formateDateUnixInteger(nextOccurrence) <= dateNowUnix) {
        nextOccurrence = addYearsFns(nextOccurrence, duration);
      }
      return nextOccurrence;
    }
  }
};
