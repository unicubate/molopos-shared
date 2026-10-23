import { describe, expect, test } from "vitest";
import {
  calculDiscount,
  calculateInterest,
  calculVat,
  capitalizeFirstLetter,
  formatePrice,
  formatPercent,
  fromCents,
  toCents,
} from "./index";
import { RecurrenceEnum } from "../../enum";

describe("Utils", () => {
  test("fromCents", () => {
    const result = fromCents(100);
    expect(result).toEqual(1);
    expect(result).not.toBeNull();
  });

  test("toCents", () => {
    const result = toCents(1);
    expect(result).toEqual(100);
    expect(result).not.toBeNull();
  });

  test("calculVat", () => {
    const result = calculVat({ value: 100, percentage: 20 });
    expect(result).toEqual(20);
    expect(result).not.toBeNull();
  });

  test("calculDiscount", () => {
    const result = calculDiscount({ value: 100, percentage: 20 });
    expect(result).toEqual(20);
    expect(result).not.toBeNull();
  });

  test("formatePrice", () => {
    const result = formatePrice({
      value: 205.35714285714286,
      currency: "EUR",
      locale: "fr",
    });
    expect(result.toString()).not.toBeNull();
  });

  test("formatPercent", () => {
    const result = formatPercent({ value: 20, locale: "fr" });
    expect(result).not.toBeNull();
  });

  test("capitalizeFirstLetter", () => {
    const result = capitalizeFirstLetter("john doe");
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
    expect(result).toEqual("John Doe");
  });

  describe("calculInterest", () => {
    test("calculInterest", () => {
      const result = calculateInterest({
        amountTotal: 500, // 500€
        interest: 3, // 3%
        scheduleCount: 10, // 10 mois
        recurrence: RecurrenceEnum.Monthly,
      });
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result).toStrictEqual({
        recurrence: RecurrenceEnum.Monthly,
        amountTotal: 500,
        interest: 3,
        interestRecurrence: 1.5,
        amountInterestRecurrence: 51.5,
        amountRecurrence: 50,
        interestTotal: 15,
        amountInterestTotal: 515,
      });
    });

    test("calculInterest returns zeros when schedule is invalid", () => {
      expect(
        calculateInterest({
          amountTotal: 1000,
          interest: 10,
          scheduleCount: 0,
          recurrence: RecurrenceEnum.Monthly,
        }),
      ).toStrictEqual({
        recurrence: RecurrenceEnum.Monthly,
        amountTotal: 1000,
        interest: 10,
        interestRecurrence: 0,
        amountInterestRecurrence: 0,
        amountRecurrence: 0,
        interestTotal: 0,
        amountInterestTotal: 0,
      });
    });

    test("calculInterest with zero interest still splits the principal", () => {
      const result = calculateInterest({
        amountTotal: 1000, // 1000€
        interest: 0, // 0%
        scheduleCount: 10, // 10 mois
        recurrence: RecurrenceEnum.Monthly,
      });
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result).toStrictEqual({
        recurrence: RecurrenceEnum.Monthly,
        amountTotal: 1000,
        interest: 0,
        interestRecurrence: 0,
        amountInterestRecurrence: 100,
        amountRecurrence: 100,
        interestTotal: 0,
        amountInterestTotal: 1000,
      });
    });
  });
});
