import { describe, expect, it, vi } from "vitest";
import {
  dateTimeNowUtc,
  dateTimeNowUtcUnixInteger,
  formateDateUnixInteger,
  recurrenceDate,
  addDaysToTimeDateStartOfDayNowUtc,
  addDaysToTimeDateNowUtc,
  formateDateMMyyyy,
  formateUnixIntegerPPp,
  scheduleDate,
  scheduleCount,
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
    const pastDate = new Date(2026, 0, 15, 14, 0, 0);
    vi.setSystemTime(pastDate);

    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        recurrence,
        date: pastDate,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toStrictEqual(
      new Date(2026, 0, 16, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toStrictEqual(
      new Date(2026, 0, 22, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toStrictEqual(
      new Date(2026, 1, 15, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toStrictEqual(
      new Date(2027, 0, 15, 14, 0, 0),
    );

    vi.useRealTimers();
  });

  it("recurrenceDate same day advances from that date", () => {
    vi.useFakeTimers();
    const today = new Date(2026, 0, 15, 14, 0, 0);
    vi.setSystemTime(today);

    const nextDate = (recurrence: RecurrenceEnum) =>
      recurrenceDate({
        date: today,
        recurrence,
        isRecurrence: true,
      });

    expect(nextDate(RecurrenceEnum.Daily)).toStrictEqual(
      new Date(2026, 0, 16, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Weekly)).toStrictEqual(
      new Date(2026, 0, 22, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Monthly)).toStrictEqual(
      new Date(2026, 1, 15, 14, 0, 0),
    );
    expect(nextDate(RecurrenceEnum.Yearly)).toStrictEqual(
      new Date(2027, 0, 15, 14, 0, 0),
    );

    vi.useRealTimers();
  });

  it("recurrenceDate returns dateInit when it is in the future", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 1, 14, 0, 0));
    const futureDate = new Date(2026, 9, 10, 9, 30, 0);

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

  it("nextOccurrenceByRecurrence Daily", () => {
    const date = new Date(2026, 0, 15, 14, 0, 0);
    const nextDate = scheduleDate({
      date,
      duration: 1,
      recurrence: RecurrenceEnum.Daily,
    });
    expect(nextDate).toStrictEqual(new Date(2026, 0, 16, 14, 0, 0));
  });

  it("nextOccurrenceByRecurrence Weekly", () => {
    const date = new Date(2026, 0, 15, 14, 0, 0);
    const nextDate = scheduleDate({
      date,
      duration: 1,
      recurrence: RecurrenceEnum.Weekly,
    });
    expect(nextDate).toStrictEqual(new Date(2026, 0, 22, 14, 0, 0));
  });

  it("nextOccurrenceByRecurrence Monthly", () => {
    const date = new Date(2026, 0, 15, 14, 0, 0);
    const nextDate = scheduleDate({
      date,
      duration: 1,
      recurrence: RecurrenceEnum.Monthly,
    });
    expect(nextDate).toStrictEqual(new Date(2026, 1, 15, 14, 0, 0));
  });

  it("nextOccurrenceByRecurrence Yearly", () => {
    const date = new Date(2026, 0, 15, 14, 0, 0);
    const nextDate = scheduleDate({
      date,
      duration: 1,
      recurrence: RecurrenceEnum.Yearly,
    });
    expect(nextDate).toStrictEqual(new Date(2027, 0, 15, 14, 0, 0));
  });

  describe("calculateNextOccurrenceDate", () => {
    const startedAt = new Date(2026, 0, 1, 14, 0, 0);

    it("Monthly with long expiredAt", () => {
      // Jan 2026 → Oct 2026 = 9 mois
      expect(
        scheduleCount({
          startedAt,
          expiredAt: new Date(2026, 9, 1, 14, 0, 0),
          recurrence: RecurrenceEnum.Monthly,
        }),
      ).toStrictEqual(9);
    });

    it("Daily with long expiredAt", () => {
      // Jan 1 → Jan 31 = 30 jours
      expect(
        scheduleCount({
          startedAt,
          expiredAt: new Date(2026, 0, 31, 14, 0, 0),
          recurrence: RecurrenceEnum.Daily,
        }),
      ).toStrictEqual(30);
    });

    it("Weekly with long expiredAt", () => {
      // Jan 1 → Apr 2 = 13 semaines
      expect(
        scheduleCount({
          startedAt,
          expiredAt: new Date(2026, 3, 2, 14, 0, 0),
          recurrence: RecurrenceEnum.Weekly,
        }),
      ).toStrictEqual(13);
    });

    it("Yearly with long expiredAt", () => {
      // Jan 2026 → Jan 2030 = 4 ans
      expect(
        scheduleCount({
          startedAt,
          expiredAt: new Date(2030, 0, 1, 14, 0, 0),
          recurrence: RecurrenceEnum.Yearly,
        }),
      ).toStrictEqual(4);
    });
  });
});
