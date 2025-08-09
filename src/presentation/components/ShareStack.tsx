"use client";

import IconCopy from "@public/icons/icon-copy.svg";
import IconEmail from "@public/icons/icon-email.svg";
import IconFacebook from "@public/icons/icon-facebook.svg";
import IconLinkedin from "@public/icons/icon-linkedin.svg";
import IconX from "@public/icons/icon-x.svg";
import Component from "@src/data/Models/Component";
import styles from "@src/presentation/styles/components/_share-stack.module.scss";
import Image from "next/image";

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
  const baseUrl = `https://codingflavour.com/article/${articleId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(baseUrl);
  };

  const altCopy = Array.isArray(dict.copy) ? dict.copy[0] : dict.copy;
  const altEmail = Array.isArray(dict.emailArticle) ? dict.emailArticle[0] : dict.emailArticle;
  const altFb = Array.isArray(dict.fbArticle) ? dict.fbArticle[0] : dict.fbArticle;
  const altX = Array.isArray(dict.xArticle) ? dict.xArticle[0] : dict.xArticle;
  const altLinkedin = Array.isArray(dict.linkedinArticle) ? dict.linkedinArticle[0] : dict.linkedinArticle;

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

export default ShareStack;
