import "server-only";
import { i18n } from "../../../../i18n.config";

/* Types */
export type DictData = { [x: string]: string | string[] };
export type Dict = { [x: string]: DictData };
export type Dicts = {
  [x: string]: Dict;
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
  names: ["i18n"],
};
const projects: Path = {
  folder: 'projects',
  names: ['codingflavour', 'portfolio'],
}
const fullDictionaries = [commonDictionaries, articles, projects];

const loadDictionaries = async () => {
  for (const locale of i18n.locales) {
    let art: Dict = {};
    for (const dictionaries of fullDictionaries) {
      for (const name of dictionaries.names) {
        const { default: dModule } = await import(`../${dictionaries.folder}/${locale}/${name}.json`)
        art[name] = dModule;
      }
    }
    dictionaries[locale] = {
      ...art,
    };
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

  return validatorProxy(dictionaries[locale]);
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

// Some time in the future, we will join these two
const validatorProxy = (dict: Dict) => {
  return new Proxy(dict, {
    get(target, prop: string) {
      if (prop === 'then' || prop === 'catch' || prop === 'finally' || typeof prop === 'symbol') {
        return Reflect.get(target, prop);
      }

      if (prop in target) {
        return validatorDictDataProxy(target[prop]);
      }

      console.warn(`Missing translation for key: ${prop}`);
      return prop;
    },
  });
};

const validatorDictDataProxy = (dictData: DictData) => {
  return new Proxy(dictData, {
    get(target, prop: string) {
      if (prop === 'then' || prop === 'catch' || prop === 'finally' || typeof prop === 'symbol') {
        return Reflect.get(target, prop);
      }

      if (prop in target) {
        return target[prop];
      }

      console.warn(`Missing translation for key: ${prop}`);
      return prop;
    },
  });
};

export {
  articles,
  projects,
  getDictionary
}