import React from "react";
import css from "./SpecialitiesItem.module.scss";

export default function SpecialitiesItem({ svg, text }) {
  return (
    <div className={css.root}>
      <img src={svg} alt={text} />
      <p>{text}</p>
    </div>
  );
}
