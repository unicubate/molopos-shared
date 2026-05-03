import { format } from "date-fns";
import { DateTime } from "luxon";
import { DateLike, Numberlike } from "../index";

/**
 * Format a date to a string
 * @param date - The date to format (e.g. "2026-01-01", "2026-01-01T00:00:00.000Z", etc.)
 * @param locale - The locale to use (e.g. "en-US", "it-IT", "fr-FR", etc.)
 * @returns The formatted date (e.g. "1 Jan 2026", "1 Jan 2026 00:00", etc.)
 *
 * @example
 * formateDate("2026-01-01", "en-US"); // "1 Jan 2026"
 */
export const formateDate = (date: Date, locale: string) => {
  let dateReturn: string | null = null;
  const todaysDate = dateTimeNowUtc();
  const currentYear = todaysDate.getFullYear();
  const dateInit = DateTime.fromISO(String(date));
  const dateYear = Number(dateInit.toFormat("yyyy"));

  if (currentYear === dateYear) {
    dateReturn = dateInit.setLocale(locale).toFormat("dd MMM HH:mm");
  } else {
    dateReturn = formatDateDDMMYYToUtc(date, locale);
  }

  return dateReturn;
};

/**
 * Format a date to a string
 * @param date - The date to format (e.g. "2026-01-01", "2026-01-01T00:00:00.000Z", etc.)
 * @param locale - The locale to use (e.g. "en-US", "it-IT", "fr-FR", etc.)
 * @returns The formatted date (e.g. "1 Jan 2026", "1 Jan 2026 00:00", etc.)
 *
 * @example
 * formateddLLLyyyy("2026-01-01", "en-US"); // "1 Jan 2026"
 */
export const formateddLLLyyyy = (date: DateLike, locale: string) => {
  const dateInit = DateTime.fromISO(String(date));
  return dateInit.setLocale(locale).toFormat("dd LLL yyyy");
};

export const formateYYDDMM = (date: Date, locale: string) => {
  const dateInit = DateTime.fromISO(String(date));
  return dateInit.setLocale(locale).toFormat("ff");
};

export const formateHHmm = (date: Date, locale: string) => {
  const dateInit = DateTime.fromISO(String(date));
  return dateInit.setLocale(locale).toFormat("t");
};

export const formatDateToUtc = (date: Date) => format(date, "dd-MM-yyyy");

export const formatDateDDMMYYToUtc = (date: Date, locale: string) => {
  const dateInit = DateTime.fromISO(String(date));
  return dateInit.setLocale(locale).toFormat("D");
};

export const formateToT = (date: Date) =>
  DateTime.fromJSDate(date).toFormat("T");

export const dateTimeNowUtc = () => DateTime.utc().toJSDate();

export const formateToCccc = (date: Date, locale: string) =>
  DateTime.fromISO(String(date)).setLocale(locale).toFormat("cccc");

export const formateTodd = (date: Date, locale: string) =>
  DateTime.fromISO(String(date)).setLocale(locale).toFormat("dd");

export const formateToLLLL = (date: Date, locale: string) =>
  DateTime.fromISO(String(date)).setLocale(locale).toFormat("LLLL");

export const formateToRFC2822 = (date: Date, locale: string) =>
  DateTime.fromISO(String(date)).setLocale(locale).toFormat("DDDD");

export const formateToyyyy = (date: Date) =>
  DateTime.fromISO(String(date)).toFormat("yyyy");

export const viewYyformateToYyyy = (date: Date) => {
  const todaysDate = new Date();
  const currentYear = todaysDate.getFullYear();
  const dateYear = Number(DateTime.fromISO(String(date)).toFormat("yyyy"));
  return currentYear === dateYear ? null : `- ${dateYear}`;
};

export const addDaysToTimeNowUtcDate = (dayNumber: number) =>
  DateTime.utc().plus({ days: dayNumber }).toJSDate();

export const formateMMLongDate = (date: Date, locale: string) => {
  return DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString({ month: "long" });
};

export const formateDDDate = (date: Date, lang: string) => {
  return DateTime.fromJSDate(date).setLocale(lang).toFormat("DD");
};

export const formateddLLDate = (date: Date, lang: string) => {
  return DateTime.fromJSDate(date).setLocale(lang).toFormat("dd LLL");
};

export const formateDDDateISO = (date: Date, locale: string) => {
  const dateInit = DateTime.fromISO(String(date));
  return dateInit.setLocale(locale).toFormat("DD");
};

/**
 * Format a date to a string
 * @param date - The date to format (e.g. "2026-01-01", "2026-01-01T00:00:00.000Z", etc.)
 * @param locale - The locale to use (e.g. "en-US", "it-IT", "fr-FR", etc.)
 * @returns The formatted date (e.g. "1 Jan 2026", "1 Jan 2026 00:00", etc.)
 *
 * @example
 * formateToUnixIntegerddLLLyyyy("2026-01-01", "en-US"); // "1 Jan 2026"
 */
export const formateToUnixIntegerddLLLyyyy = (
  date: Numberlike,
  locale: string,
) => {
  const dateInit = DateTime.fromSeconds(Number(date));
  return dateInit.setLocale(locale).toFormat("dd LLL yyyy");
};

/**
 * Format a date to a string
 * @param date - The date to format (e.g. "2026-01-01", "2026-01-01T00:00:00.000Z", etc.)
 * @param lang - The locale to use (e.g. "en-US", "it-IT", "fr-FR", etc.)
 * @returns The formatted date (e.g. "1 Jan 2026", "1 Jan 2026 00:00", etc.)
 *
 * @example
 * formateTDate("2026-01-01", "en-US"); // "1 Jan 2026"
 */
export const formateTDate = (date: Date, lang: string) => {
  return DateTime.fromJSDate(date).setLocale(lang).toFormat("t");
};
