export enum LocaleEnum {
  en = "en",
  it = "it",
  fr = "fr",
  de = "de",
  es = "es",
  ru = "ru",
  enUS = "enUS",
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
  // {
  //   name: "German",
  //   code: LocaleEnum.de,
  // },
  // {
  //   name: "Spanish",
  //   code: LocaleEnum.es,
  // },
  // {
  //   name: "Russian",
  //   code: LocaleEnum.ru,
  // },
];
