"use client";

import Component from "@src/data/Models/Component";
import IconCopy from "@/presentation/assets/icons/icon-copy.svg";
import IconEmail from "@/presentation/assets/icons/icon-email.svg";
import IconFacebook from "@/presentation/assets/icons/icon-facebook.svg";
import IconLinkedin from "@/presentation/assets/icons/icon-linkedin.svg";
import IconX from "@/presentation/assets/icons/icon-x.svg";
import styles from "@/presentation/styles/components/_share-stack.module.scss";
import Image from "next/image";
import React, { useMemo } from "react";

const { shareStack, shareStack__text } = styles;

interface IShareStackProps {
  articleId: string;
  // sendEmail: () => void;
}

// This can be improved by having each button in a separate component that is client and use this layout as server-side
const ShareStack: Component<IShareStackProps> = ({
  articleId,
  // sendEmail
  dict,
}) => {
  const baseUrl = `https://coding-flavour.com/article/${articleId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(baseUrl);
  };

  const altCopy = useMemo(
    () => (Array.isArray(dict.copy) ? dict.copy[0] : dict.copy),
    [dict.copy]
  );

  const altEmail = useMemo(
    () => (Array.isArray(dict.emailArticle) ? dict.emailArticle[0] : dict.emailArticle),
    [dict.emailArticle]
  );

  const altFb = useMemo(
    () => (Array.isArray(dict.fbArticle) ? dict.fbArticle[0] : dict.fbArticle),
    [dict.fbArticle]
  );

  const altX = useMemo(
    () => (Array.isArray(dict.xArticle) ? dict.xArticle[0] : dict.xArticle),
    [dict.xArticle]
  );

  const altLinkedin = useMemo(
    () => (Array.isArray(dict.linkedinArticle) ? dict.linkedinArticle[0] : dict.linkedinArticle),
    [dict.linkedinArticle]
  );

  return (
    <div className={shareStack} data-testid={"share-stack"}>
      <span className={shareStack__text}>{dict.share}: </span>
      <Image
        src={IconCopy}
        alt={altCopy}
        key={"icon-copy"}
        onClick={copyToClipboard}
      />
      <Image
        src={IconEmail}
        alt={altEmail}
        key={"icon-email"}
        // onClick={sendEmail}
      />
      <Image
        src={IconFacebook}
        alt={altFb}
        key={"icon-facebook"}
      />
      <Image src={IconX} alt={altX} key={"icon-twitter"} />
      <Image
        src={IconLinkedin}
        alt={altLinkedin}
        key={"icon-linkedin"}
      />
    </div>
  );
};

export default React.memo(ShareStack);
