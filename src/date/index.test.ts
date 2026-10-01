import { describe, expect, it, vi } from "vitest";
import {
  dateTimeNowUtc,
  dateTimeNowUtcUnixInteger,
  formateDateUnixInteger,
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
    vi.setSystemTime(new Date(2026, 9, 24, 14, 0, 0));

    const date = new Date(2025, 6, 10, 2, 0, 0);
    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        date,
        recurrence,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toEqual(
      new Date(2026, 9, 25, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toEqual(
      new Date(2026, 9, 31, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toEqual(
      new Date(2026, 10, 10, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toEqual(
      new Date(2027, 6, 10, 14, 0, 0),
    );

    vi.useRealTimers();
  });
});
