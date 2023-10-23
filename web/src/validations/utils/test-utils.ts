import { getDictionary } from "@src/data/locales/dict/dict";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { i18n } from "../../../../i18n.config";

const loadDict = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;
  return common;
};

export { render, loadDict };
