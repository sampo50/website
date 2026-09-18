import type { Locale } from "@/lib/i18n";
import { fi } from "./fi";
import { en } from "./en";

export type Dictionary = typeof fi;

const dictionaries: Record<Locale, Dictionary> = {
  fi,
  en: en as unknown as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { fi, en };
