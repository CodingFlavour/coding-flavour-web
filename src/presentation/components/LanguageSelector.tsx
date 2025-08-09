"use client";

import useI18N from "@src/hooks/useI18N";
import styles from "@src/presentation/styles/components/_language-selector.module.scss";
import { useRouter } from "next/navigation";
import React from "react";

const {
  languageSelector,
  languageSelector__text,
  languageSelector__text__active,
} = styles;

const LanguageSelector = () => {
  const router = useRouter();
  const { pathnames, languageActive } = useI18N();

  const handleNewLanguage = (newLang: string) => {
    const path = pathnames.filter((_, index) => index > 0).join("/");

    router.push(`/${newLang}/${path}`);
  };

  return (
    <div className={languageSelector} data-testid={"language-selector"}>
      <label
        htmlFor="lang_input"
        className={`${languageSelector__text} ${languageActive === "es" ? languageSelector__text__active : ""
          }`}
        onClick={() => handleNewLanguage("es")}
        data-testid={"language-selector-es"}
      >
        ES
      </label>
      <span className={"text"}>|</span>
      <label
        htmlFor="lang_input"
        className={`${languageSelector__text} ${languageActive === "en" ? languageSelector__text__active : ""
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
