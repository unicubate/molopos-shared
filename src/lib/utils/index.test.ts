import {
  calculDiscount,
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
});
