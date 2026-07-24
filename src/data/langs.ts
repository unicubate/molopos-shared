export enum LocaleEnum {
  en = "en",
  it = "it",
  fr = "fr",
  de = "de",
  es = "es",
}

export type Locale = {
  name: string;
  code: LocaleEnum;
};

export const locales: Locale[] = [
  {
    name: "Italian",
    code: LocaleEnum.it,
  },
  {
    name: "French",
    code: LocaleEnum.fr,
  },
  {
    name: "English",
    code: LocaleEnum.en,
  },
];
