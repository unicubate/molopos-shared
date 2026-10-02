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
  formateUnixIntegerdddMMYYYYHHmm,
} from "./index";
import { RecurrenceEnum } from "../enum";

describe("Date", () => {
  const dateTest = new Date(2025, 6, 10, 14, 0, 0);
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
    const dateNow = formateDateMMyyyy(dateTest);
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
    expect(dateNow).toStrictEqual("072025");
  });

  it("formateUnixIntegerdddMMYYYYHHmm", () => {
    const dateNow = formateUnixIntegerdddMMYYYYHHmm(1792794512, "en");
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
    expect(dateNow).toStrictEqual("24 Oct 2026, 00:28");
  });

  it("recurrenceDate isRecurrence = true", () => {
    vi.useFakeTimers();
    const nowYear = formateToyyyy(new Date());
    vi.setSystemTime(new Date(nowYear, 9, 1, 14, 0, 0));


    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        date: dateTest,
        recurrence,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toStrictEqual(
      new Date(nowYear, 9, 2, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toStrictEqual(
      new Date(nowYear, 9, 8, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toStrictEqual(
      new Date(nowYear, 9, 10, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toStrictEqual(
      new Date(nowYear + 1, 6, 10, 14, 0, 0),
    );

    vi.useRealTimers();
  });
});
