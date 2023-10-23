"use client";

import Component from "@src/data/Models/Component";
import IconCopy from "@public/icons/icon-copy.svg";
import IconEmail from "@public/icons/icon-email.svg";
import IconFacebook from "@public/icons/icon-facebook.svg";
import IconLinkedin from "@public/icons/icon-linkedin.svg";
import IconX from "@public/icons/icon-x.svg";
import styles from "@src/presentation/styles/components/_share-stack.module.scss";
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
    () =>
      Array.isArray(dict.emailArticle)
        ? dict.emailArticle[0]
        : dict.emailArticle,
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
    () =>
      Array.isArray(dict.linkedinArticle)
        ? dict.linkedinArticle[0]
        : dict.linkedinArticle,
    [dict.linkedinArticle]
  );

  const openModal = (url: string, target: string) => {
    window.open(url, target, "width=800,height=600");
  };

  const openFb = () => {
    openModal(
      "https://www.facebook.com/sharer/sharer.php?u=" + baseUrl,
      "facebook-share-dialog"
    );
    return false;
  };

  const openTw = () => {
    openModal("https://x.com/share?url=" + baseUrl, "x-share-dialog");
    return false;
  };

  const openLi = () => {
    openModal(
      // "https://linkedin.com/shareArticle?url=" + encodeURI(baseUrl),
      "https://linkedin.com/shareArticle?mini=true&url=" +encodeURIComponent(baseUrl) +"&title=How%20to%20make%20custom%20linkedin%20share%20button&summary=some%20summary%20if%20you%20want&source=stackoverflow.com",
      ""
    );
    return false;
  };

  return (
    <div className={shareStack} data-testid={"share-stack"}>
      <span className={shareStack__text}>{dict.share}: </span>
      <Image
        src={IconCopy}
        alt={altCopy}
        key={"icon-copy"}
        onClick={copyToClipboard}
      />
      <a href="mailto:youremail@email.com">
        <Image src={IconEmail} alt={altEmail} key={"icon-email"} />
      </a>
      <Image
        src={IconFacebook}
        alt={altFb}
        key={"icon-facebook"}
        onClick={openFb}
      />
      <Image src={IconX} alt={altX} key={"icon-twitter"} onClick={openTw} />
      <Image
        src={IconLinkedin}
        alt={altLinkedin}
        key={"icon-linkedin"}
        onClick={openLi}
      />
    </div>
  );
};

export default React.memo(ShareStack);
