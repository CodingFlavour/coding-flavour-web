import "server-only";

export type DictData = { [x: string]: string | string[] };
export type Dict = { [x: string]: Promise<DictData> }
export type Dicts = {
  [x: string]: () => Dict;
};


const dictionaries: Dicts = {
  en: () => ({
    common: import("../languages/en/common.json").then((module) => module.default),
    sassprependviawebpack: import("../articles/en/sassprependviawebpack.json").then(
      (module) => module.default
    ),
  }),
  es: () => ({
    common: import("../languages/es/common.json").then((module) => module.default),
    sassprependviawebpack: import("../articles/es/sassprependviawebpack.json").then(
      (module) => module.default
    ),
  }),
};
export const getDictionary = async (locale: string) => dictionaries[locale]?.();
