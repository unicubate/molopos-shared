import { describe, expect, test } from "vitest";
import {
  calculDiscount,
  calculInterest,
  calculVat,
  capitalizeFirstLetter,
  formatePrice,
  formatPercent,
  fromCents,
  toCents,
} from "./index";

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
      const result = calculInterest({
        amount: 500, // 500€
        interest: 3, // 3%
        scheduleCount: 10, // 10 mois
      });
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result).toStrictEqual({
        amountSchedule: 50, // 50€
        interestSchedule: 1.5, // 1.5€ / mois
        interestScheduleTotal: 15, // 15€
        amountInterestSchedule: 51.5, // 51.5€ / mois
        amountInterestScheduleTotal: 515, // 515€ / 10 mois
      });
    });

    test("calculInterest returns zeros when schedule is invalid", () => {
      expect(
        calculInterest({ amount: 1000, interest: 10, scheduleCount: 0 }),
      ).toStrictEqual({
        amountSchedule: 0,
        interestSchedule: 0,
        interestScheduleTotal: 0,
        amountInterestSchedule: 0,
        amountInterestScheduleTotal: 0,
      });
    });

    test("calculInterest returns zeros when interest is invalid", () => {
      const result = calculInterest({
        amount: 1000, // 1000€
        interest: 0, // 0%
        scheduleCount: 10, // 10 mois
      });
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result).toStrictEqual({
        amountSchedule: 100,
        interestSchedule: 0,
        interestScheduleTotal: 0,
        amountInterestSchedule: 100,
        amountInterestScheduleTotal: 1000,
      });
    });
  });
});
