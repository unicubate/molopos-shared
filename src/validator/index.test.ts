import { plainToInstance } from "class-transformer";
import { describe, expect, it } from "vitest";
import {
  TransformArrayString,
  TransformBooleanString,
  TransformStringToDate,
  TransformStringToNumber,
  TransformToNullIfFalsy,
} from "./index";

const transform = (
  decorate: (target: object, propertyKey: string) => void,
  value: unknown,
) => {
  class Field {
    value?: unknown;
  }

  decorate(Field.prototype, "value");
  return plainToInstance(Field, { value }).value;
};

describe("Validator", () => {
  it("TransformBooleanString converts true and false strings", () => {
    const convert = (value: unknown) =>
      transform(TransformBooleanString(), value);

    expect(convert("true")).toStrictEqual(true);
    expect(convert("false")).toStrictEqual(false);
    expect(convert(true)).toStrictEqual(true);
    expect(convert(false)).toStrictEqual(false);
    expect(convert("yes")).toStrictEqual("yes");
    expect(convert(null)).toBeNull();
  });

  it("TransformToNullIfFalsy turns falsy values into null", () => {
    const convert = (value: unknown) =>
      transform(TransformToNullIfFalsy(), value);

    expect(convert(undefined)).toBeNull();
    expect(convert(null)).toBeNull();
    expect(convert("")).toBeNull();
    expect(convert(false)).toBeNull();
    expect(convert(0)).toBeNull();
    expect(convert("project-1")).toStrictEqual("project-1");
    expect(convert(12)).toStrictEqual(12);
  });

  it("TransformArrayString splits a comma-separated string", () => {
    const convert = (value: unknown) =>
      transform(TransformArrayString(), value);

    expect(convert("alpha, beta, gamma")).toStrictEqual(["alpha", "beta", "gamma"]);
    expect(convert("alpha")).toStrictEqual(["alpha"]);
    expect(convert("")).toBeNull();
    expect(convert(null)).toBeNull();
  });

  it("TransformStringToNumber converts a numeric string", () => {
    const convert = (value: unknown) =>
      transform(TransformStringToNumber(), value);

    expect(convert("42")).toStrictEqual(42);
    expect(convert("3.5")).toStrictEqual(3.5);
    expect(convert("0")).toStrictEqual(0);
    expect(convert("")).toBeNull();
    expect(convert(null)).toBeNull();
  });

  it("TransformStringToDate converts a date string", () => {
    const convert = (value: unknown) =>
      transform(TransformStringToDate(), value);

    expect(convert("2026-01-01")).toStrictEqual(new Date("2026-01-01"));
    expect(convert("2026-01-01T00:00:00.000Z")).toStrictEqual(new Date("2026-01-01T00:00:00.000Z"));
    expect(convert(new Date("2026-01-01"))).toStrictEqual(new Date("2026-01-01"));
    expect(convert("")).toBeNull();
    expect(convert(null)).toBeNull();
    expect(convert(undefined)).toBeNull();
  });
});
