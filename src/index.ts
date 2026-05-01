export * from "./date";
export * from "./enum";
export * from "./lib/utils";

export type DateLike = Date | string;

export type Numberlike = number | `${number}` | `${number}.${number}`;
