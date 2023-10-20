import IconCopy from "@/presentation/assets/icons/icon-copy.svg";
import IconEmail from "@/presentation/assets/icons/icon-email.svg";
import IconFacebook from "@/presentation/assets/icons/icon-facebook.svg";
import IconLinkedin from "@/presentation/assets/icons/icon-linkedin.svg";
import IconX from "@/presentation/assets/icons/icon-x.svg";
import styles from "@/presentation/styles/components/_share-stack.module.scss";
import Image from "next/image";
import React from "react";

const { shareStack, shareStack__text } = styles;

interface IShareStackProps {
  articleId: string;
  sendEmail: () => void;
}

const ShareStack: React.FC<IShareStackProps> = ({ articleId, sendEmail }) => {
  const baseUrl = `https://coding-flavour.com/article/${articleId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(baseUrl);
  };

  return (
    <div className={shareStack} data-testid={"share-stack"}>
      <span className={shareStack__text}>Share: </span>
      <Image
        src={IconCopy}
        alt={"Copy this link to your clipboard"}
        key={"icon-copy"}
        onClick={copyToClipboard}
      />
      <Image
        src={IconEmail}
        alt={"Email this article"}
        key={"icon-email"}
        onClick={sendEmail}
      />
      <Image
        src={IconFacebook}
        alt={"Share this article in a Facebook post"}
        key={"icon-facebook"}
      />
      <Image src={IconX} alt={"Email this article"} key={"icon-twitter"} />
      <Image src={IconLinkedin} alt={"Email this article"} key={"icon-linkedin"} />
    </div>
  );
};

export default React.memo(ShareStack);
