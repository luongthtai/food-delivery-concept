import React from "react";
import css from "./PrimaryButton.module.scss";

export default function PrimaryButton({ text, submit, color, padding, bgColor, border }) {
  const handleSubmit = (e) => {
    e.preventdefault()
  }

  return (
    <button type="submit" onSubmit={() => handleSubmit()} className={css.button} onClick={submit} style={{backgroundColor: bgColor, padding: padding, color: color, border: border}}>
      {text}
    </button>
  );
}
