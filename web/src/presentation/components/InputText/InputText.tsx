import styles from "@/presentation/styles/components/_input-text.module.scss";
import React from "react";

type INPUT_TYPES = "text" | "textarea";

export interface IInputTextProps {
  id: string;
  value: string;
  type: INPUT_TYPES;
  rows?: number;
}

const { inputText__value, inputText__input } = styles;

const InputText: React.FC<IInputTextProps> = ({ id, value, type, rows }) => {
  return (
    <>
      <label
        htmlFor={id}
        className={inputText__value}
        data-testid={"input-text-value"}
      >
        {value}
      </label>
      {type === "text" && (
        <input
          id={id}
          className={inputText__input}
          type="text"
          name={id}
          data-testid={"input-text-input"}
        />
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          className={inputText__input}
          name={id}
          rows={rows}
          data-testid={"input-text-area"}
        ></textarea>
      )}
    </>
  );
};

export default React.memo(InputText);
