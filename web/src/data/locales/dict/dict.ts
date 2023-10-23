import "server-only";
import { i18n } from "../../../../../i18n.config";

export type DictData = { [x: string]: string | string[] };
export type Dict = { [x: string]: Promise<DictData> };
export type Dicts = {
  [x: string]: () => Dict;
};
export type Path = {
  folder: string;
  names: string[];
};

const dictionaries: Dicts = {};
const commonDictionaries: Path = {
  folder: "languages",
  names: ["common"],
};
const articles: Path = {
  folder: "articles",
  names: ["sassprependviawebpack", "anotherarticle"],
};
const projects: Path = {
  folder: 'projects',
  names: ['codingflavour', 'portfolio'],
}
const fullDictionaries = [commonDictionaries, articles, projects];

for (let lang of i18n.locales) {
  let art: Dict = {};
  for (let dictionaries of fullDictionaries) {
    for (let name of dictionaries.names) {
      art[name] = import(`../${dictionaries.folder}/${lang}/${name}.json`).then(
        (module) => module.default
      );
    }
  }
  dictionaries[lang] = () => ({
    ...art,
  });
}

export { articles, projects};
export const getDictionary = async (locale: string) => dictionaries[locale]?.();
