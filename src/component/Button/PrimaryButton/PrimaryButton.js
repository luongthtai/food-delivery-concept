import React from "react";
import css from "./PrimaryButton.module.scss";

export default function PrimaryButton({ text, submit, color, padding }) {
  const handleSubmit = (e) => {
    e.preventdefault()
  }

  return (
    <button type="submit" onSubmit={() => handleSubmit()} className={css.button} onClick={submit} style={{backgroundColor: color, padding: padding}}>
      {text}
    </button>
  );
}
