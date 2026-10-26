import { Transform } from "class-transformer";

/**
 * Transforme les chaînes 'true'/'false' en booléens, tout en conservant
 * les valeurs déjà booléennes ou undefined/null.
 *
 * @example
 * class MyDto {
 *   @IsBoolean()
 *   @TransformBooleanString()
 *   isClosed?: boolean;
 * }
 */
export function TransformBooleanString() {
  return Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  });
}

/**
 * Transforme une valeur falsy (undefined, null, empty string, false, 0, NaN)
 * en null. Sinon, retourne la valeur inchangée.
 * Utile pour normaliser les champs optionnels envoyés vides.
 *
 * @example
 * class MyDto {
 *   @IsOptional()
 *   @IsUUID()
 *   @TransformToNullIfFalsy()
 *   projectId?: string | null;
 * }
 */
export function TransformToNullIfFalsy() {
  return Transform(({ value }) => {
    if (!value) return null;
    return value;
  });
}

/**
 * Transforme les chaînes séparées par des virgules en un tableau de chaînes.
 *
 * @example
 * class MyDto {
 *   @IsArray()
 *   @TransformArrayString()
 *   tags?: string[];
 * }
 */
export function TransformArrayString() {
  return Transform(({ value }) =>
    value ? value?.split(",").map((item: string) => item.trim()) : null,
  );
}

/**
 * Transforme les chaînes séparées par des virgules en un tableau de chaînes.
 *
 * @example
 * class MyDto {
 *   @IsNumber()
 *   @TransformStringToNumber()
 *   age?: number;
 * }
 */
export function TransformStringToNumber() {
  return Transform(({ value }) => {
    if (!value) return null;
    if (typeof value === "number") return value;
    return Number(value);
  });
}

/**
 * Transforme une chaîne de date en un objet Date.
 *
 * @example
 * class MyDto {
 *   @IsDate()
 *   @TransformStringToDate()
 *   createdAt?: Date;
 * }
 */
export function TransformStringToDate() {
  return Transform(({ value }) => {
    if (!value) return null;
    if (value instanceof Date) return value;
    return new Date(value);
  });
}
