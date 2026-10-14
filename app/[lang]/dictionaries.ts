import { lang } from "next/root-params";
import { notFound } from "next/navigation";

const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((m) => m.default),
  ar: () => import("../../dictionaries/ar.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (localeOverride?: string) => {
  const locale = (localeOverride as Locale) || ((await lang()) as Locale);
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};