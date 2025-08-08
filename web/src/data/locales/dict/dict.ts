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

let dictionaries: Dicts = {};

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

const loadDictionaries = async () => {
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
}

const getDictionary = async (locale: string) => {
  if (Object.keys(dictionaries).length === 0) {
    await loadDictionaries();
  }

  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }

  return dictionaries[locale]();
};

export {
  articles, 
  projects,
  getDictionary
}