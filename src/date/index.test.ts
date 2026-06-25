import {
  dateTimeNowUtc,
  dateTimeNowUtcUnixInteger,
  formateDateUnixInteger,
  recurrenceDate,
  subtractDaysToDateTimeNowUtc,
} from ".";
import { RecurrenceEnum } from "../enum";

describe("Date", () => {
  test("dateTimeNowUtc", () => {
    const dateNow = dateTimeNowUtc();
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  test("dateTimeNowUtcUnixInteger", () => {
    const dateNow = dateTimeNowUtcUnixInteger();
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  test("formateDateUnixInteger", () => {
    const dateNow = formateDateUnixInteger(new Date());
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  test("subtractDaysToDateTimeNowUtc", () => {
    const dateNow = subtractDaysToDateTimeNowUtc(1);
    expect(dateNow).not.toBeNull();
    expect(dateNow).toBeDefined();
  });

  test("recurrenceDate", () => {
    const dateNow = dateTimeNowUtc();
    const dateNextMonth = recurrenceDate({
      date: dateNow,
      recurrence: RecurrenceEnum.Monthly,
    });
    const dateNextYear = recurrenceDate({
      date: dateNow,
      recurrence: RecurrenceEnum.Yearly,
    });
    const dateNextWeek = recurrenceDate({
      date: dateNow,
      recurrence: RecurrenceEnum.Weekly,
    });
    const dateNextDay = recurrenceDate({
      date: dateNow,
      recurrence: RecurrenceEnum.Daily,
    });

    expect(dateNextDay).not.toBeNull();
    expect(dateNextYear).not.toBeNull();
    expect(dateNextMonth).not.toBeNull();
    expect(dateNextWeek).not.toBeNull();
    expect(dateNextDay).toBeDefined();
    expect(dateNextYear).toBeDefined();
    expect(dateNextMonth).toBeDefined();
    expect(dateNextWeek).toBeDefined();
  });
});
