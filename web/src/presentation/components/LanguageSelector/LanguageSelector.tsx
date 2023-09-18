import React from "react";
import styles from "@/presentation/styles/components/_language-selector.module.scss";

const { languageSelector, activeLeft } = styles;

export interface ILanguageSelector {
  isLeftActive: boolean;
  handleNewLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<ILanguageSelector> = ({
  isLeftActive,
  handleNewLanguage,
}) => {
  const langClassName = isLeftActive
    ? `${languageSelector} ${activeLeft}`
    : languageSelector;
  return (
    <div className={langClassName} data-testid={"language-selector"}>
      <span
        className={"text"}
        onClick={() => handleNewLanguage("es")}
        data-testid={"language-selector-es"}
      >
        ES
      </span>
      <span className={"text"}>|</span>
      <span
        className={"text"}
        onClick={() => handleNewLanguage("en")}
        data-testid={"language-selector-en"}
      >
        EN
      </span>
    </div>
  );
};

export default React.memo(LanguageSelector);
