export const fromCents = (value: number | string): number =>
  Number(value) / 100;

export const toCents = (value: number | string): number => Number(value) * 100;

export const calculVat = ({
  value,
  percentage,
}: {
  value: number;
  percentage: number;
}): number => (percentage > 0 ? value * fromCents(percentage) : 0);

export const calculDiscount = ({
  value,
  percentage,
}: {
  value: number;
  percentage: number;
}): number => (percentage > 0 ? fromCents(value * percentage) : 0);
