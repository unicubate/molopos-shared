import { describe, expect, it, vi } from "vitest";
import {
  dateTimeNowUtc,
  dateTimeNowUtcUnixInteger,
  formateDateUnixInteger,
  formateToyyyy,
  recurrenceDate,
  addDaysToTimeDateStartOfDayNowUtc,
  addDaysToTimeDateNowUtc,
  formateDateMMyyyy,
  formateUnixIntegerPPp,
} from "./index";
import { RecurrenceEnum } from "../enum";

describe("Date", () => {
  const pastDateTest = new Date(2025, 6, 10, 14, 0, 0);
  it("formateDDDateISO", () => {
    const dateNow = formateDateUnixInteger(new Date());
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("dateTimeNowUtc", () => {
    const dateNow = dateTimeNowUtc();
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("dateTimeNowUtcUnixInteger", () => {
    const dateNow = dateTimeNowUtcUnixInteger();
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("formateDateUnixInteger", () => {
    const dateNow = formateDateUnixInteger(new Date());
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("addDaysToTimeDateNowUtc", () => {
    const dateNow = addDaysToTimeDateNowUtc(1);
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("addDaysToTimeDateStartOfDayNowUtc", () => {
    const dateNow = addDaysToTimeDateStartOfDayNowUtc(1);
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("formateDateMMyyyy", () => {
    const dateNow = formateDateMMyyyy(pastDateTest);
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
    expect(dateNow).toStrictEqual("072025");
  });

  it("formateUnixIntegerPPp", () => {
    const dateNow = formateUnixIntegerPPp(1792794512, "en");
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  it("recurrenceDate catches up from the original past date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 22, 14, 0, 0));

    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        recurrence,
        date: pastDateTest,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toStrictEqual(
      new Date(2026, 9, 23, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toStrictEqual(
      new Date(2026, 9, 29, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toStrictEqual(
      new Date(2026, 10, 10, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toStrictEqual(
      new Date(2027, 6, 10, 14, 0, 0),
    );

    vi.useRealTimers();
  });

  it("recurrenceDate same day advances from that date", () => {
    vi.useFakeTimers();
    const nowDay = new Date().getDate();
    const nowMonth = new Date().getMonth();
    const nowYear = formateToyyyy(new Date());
    const today = new Date(nowYear, nowMonth, nowDay, 14, 0, 0);
    vi.setSystemTime(today);

    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        date: today,
        recurrence,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toStrictEqual(
      new Date(nowYear, nowMonth, nowDay + 1, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toStrictEqual(
      new Date(nowYear, nowMonth, nowDay + 7, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toStrictEqual(
      new Date(nowYear, nowMonth + 1, nowDay, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toStrictEqual(
      new Date(nowYear + 1, nowMonth, nowDay, 14, 0, 0),
    );

    vi.useRealTimers();
  });

  it("recurrenceDate returns dateInit when it is in the future", () => {
    vi.useFakeTimers();
    const nowYear = formateToyyyy(new Date());
    const nowMonth = new Date().getMonth();
    const nowDay = new Date().getDate();
    vi.setSystemTime(new Date(nowYear, 9, 1, 14, 0, 0));
    const futureDate = new Date(nowYear, nowMonth, nowDay + 4, 9, 30, 0);

    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        date: futureDate,
        recurrence,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toStrictEqual(futureDate);
    expect(nextDate(RecurrenceEnum.Weekly)).toStrictEqual(futureDate);
    expect(nextDate(RecurrenceEnum.Monthly)).toStrictEqual(futureDate);
    expect(nextDate(RecurrenceEnum.Yearly)).toStrictEqual(futureDate);

    vi.useRealTimers();
  });
});
