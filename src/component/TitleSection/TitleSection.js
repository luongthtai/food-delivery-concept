import React from "react";
import css from "./TitleSection.module.scss";

export default function TitleSection({ title, hastag, button }) {
  return (
    <div className={css.titleSection}>
      <h2>
        <span>{hastag}</span>
        {title}
      </h2>
      {button}
    </div>
  );
}
