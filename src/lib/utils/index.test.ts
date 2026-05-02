import { calculDiscount, calculVat, fromCents, toCents } from "./index";

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
});
