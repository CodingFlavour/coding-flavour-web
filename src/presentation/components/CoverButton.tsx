import IconSend from "@public/icons/icon-send.svg";
import IconTick from "@public/icons/icon-tick.svg";
import styles from "@src/presentation/styles/components/_cover-button.module.scss";
import Image from "next/image";
import React, { useEffect } from "react";

interface ICoverButtonProps {
  isActive?: boolean;
  hasFinished?: boolean;
  toggleHasFinished?: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  altTextSended: string;
}

const {
  coverButton,
  coverButton__button,
  activeCoverButton,
  finishedCoverButton,
  coverButton__defaultIcon,
  coverButton__sendedIcon,
} = styles;

// TODO: Do tests after implementing final logic
const CoverButton: React.FC<ICoverButtonProps> = ({
  isActive,
  hasFinished,
  toggleHasFinished,
  text,
  altTextSended
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasFinished && toggleHasFinished) {
        toggleHasFinished(false);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, hasFinished, toggleHasFinished]);

  const buttonClassName = `${coverButton__button} ${
    isActive ? activeCoverButton : ""
  } ${hasFinished ? finishedCoverButton : ""}`;

  return (
    <div className={coverButton}>
      <button className={buttonClassName} type="submit">
        <span>{text}</span>
        <Image src={IconSend} alt={text} className={coverButton__defaultIcon} />
        <Image
          src={IconTick}
          alt={altTextSended}
          className={coverButton__sendedIcon}
        />
      </button>
    </div>
  );
};

export default CoverButton;
