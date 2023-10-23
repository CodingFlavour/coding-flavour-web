"use client";

import styles from "@src/presentation/styles/components/_language-selector.module.scss";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { i18n } from "../../../../i18n.config";

const {
  languageSelector,
  languageSelector__text,
  languageSelector__text__active,
} = styles;

export interface ILanguageSelectorProps {
  isLeftActive: boolean;
}

const LanguageSelector: React.FC<ILanguageSelectorProps> = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((path) => path !== "");
  const currentLanguage = i18n.locales.find((lang) => lang === pathnames[0]);
  const defaultLocale = i18n.defaultLocale;
  const languageActive = currentLanguage ?? defaultLocale;
  const router = useRouter();

  const handleNewLanguage = (newLang: string) => {
    const path = pathnames.filter((_, index) => index > 0).join("/");

    fetch("/changeLanguage", {
      method: "POST",
      body: JSON.stringify({
        newLang,
      }),
    });
    router.push(`/${newLang}/${path}`);
  };

  return (
    <div className={languageSelector} data-testid={"language-selector"}>
      <label
        htmlFor="lang_input"
        className={`${languageSelector__text} ${
          languageActive === "es" ? languageSelector__text__active : ""
        }`}
        onClick={() => handleNewLanguage("es")}
        data-testid={"language-selector-es"}
      >
        ES
      </label>
      <span className={"text"}>|</span>
      <label
        htmlFor="lang_input"
        className={`${languageSelector__text} ${
          languageActive === "en" ? languageSelector__text__active : ""
        }`}
        onClick={() => handleNewLanguage("en")}
        data-testid={"language-selector-en"}
      >
        EN
      </label>
    </div>
  );
};

export default React.memo(LanguageSelector);
