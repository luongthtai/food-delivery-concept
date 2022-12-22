import React from "react";
import css from "./USPItem.module.scss";

export default function USPItem({ number, content }) {
  return (
    <div id={css.items}>
      <div id={css.circleBg}>
        <div id={css.border}></div>
        <div id={css.circle}></div>
        <p>{number}</p>
      </div>

      <p id={css.content}>{content}</p>
    </div>
  );
}
