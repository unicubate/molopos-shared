import { describe, expect, it, vi } from "vitest";
import {
  dateTimeNowUtc,
  dateTimeNowUtcUnixInteger,
  formateDateUnixInteger,
  formateToyyyy,
  recurrenceDate,
} from "./index";
import { RecurrenceEnum } from "../enum";

describe("Date", () => {
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

  it("recurrenceDate isRecurrence = true", () => {
    vi.useFakeTimers();
    const nowYear = formateToyyyy(new Date());
    vi.setSystemTime(new Date(nowYear, 9, 1, 14, 0, 0));

    const date = new Date(2025, 6, 10, 14, 0, 0);
    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        date,
        recurrence,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toEqual(
      new Date(nowYear, 9, 2, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toEqual(
      new Date(nowYear, 9, 8, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toEqual(
      new Date(nowYear, 9, 10, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toEqual(
      new Date(nowYear + 1, 6, 10, 14, 0, 0),
    );

    vi.useRealTimers();
  });
});
