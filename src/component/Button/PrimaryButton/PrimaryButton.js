import React from "react";
import css from "./PrimaryButton.module.scss";

export default function PrimaryButton({ text, submit, color, padding }) {

  return (
    <button type="button" className={css.button} onClick={submit} style={{backgroundColor: color, padding: padding}}>
      {text}
    </button>
  );
}
