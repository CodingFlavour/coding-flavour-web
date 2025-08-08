import "server-only";
import { i18n } from "../../../../i18n.config";

/* Types */
export type DictData = { [x: string]: string | string[] };
export type Dict = { [x: string]: Promise<DictData> };
export type Dicts = {
  [x: string]: () => Dict;
};
export type Path = {
  folder: string;
  names: string[];
};

/* Singleton */
let dictionaries: Dicts = {};
let isLoading = false;

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
        const { default: dModule } = await import(`../${dictionaries.folder}/${lang}/${name}.json`)
        art[name] = dModule;
      }
    }
    dictionaries[lang] = () => ({
      ...art,
    });
  }
}

const getDictionary = async (locale: string) => {
  await waitIfIsLoading();

  if (Object.keys(dictionaries).length === 0) {
    isLoading = true;

    await loadDictionaries();

    isLoading = false;
  }

  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }

  return dictionaries[locale]();
};

const waitIfIsLoading = async () => {
  await new Promise((resolve) => {
    const check = () => {
      if (!isLoading) return resolve(true);

      console.warn("Waiting for dictionaries to load...");
      setTimeout(check, 100);
    };

    check();
  });
};

export {
  articles,
  projects,
  getDictionary
}