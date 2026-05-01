import { calculDiscount, calculVat, fromCents, toCents } from "./index";

describe("Utils", () => {
  test("fromCents", () => {
    const result = fromCents(100);
    expect(result).toEqual(1);
  });

  test("toCents", () => {
    const result = toCents(1);
    expect(result).toEqual(100);
  });

  test("calculVat", () => {
    const result = calculVat({ value: 100, percentage: 20 });
    expect(result).toEqual(20);
  });

  test("calculDiscount", () => {
    const result = calculDiscount({ value: 100, percentage: 20 });
    expect(result).toEqual(20);
  });
});
