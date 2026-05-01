export * from "./date";
export * from "./enum";

export type DateLike = Date | string;

export type Numberlike = number | `${number}` | `${number}.${number}`;
