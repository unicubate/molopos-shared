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
  return Transform(({ value }) => (value ? value : null));
}
