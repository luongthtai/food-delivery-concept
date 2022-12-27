import React from "react";
import css from "./TitleSection.module.scss";

export default function TitleSection({ title, light, button, center }) {
  return (
    <div className={css.titleSection} style={{justifyContent: center && "center"}}>
      <h2>
        {title}
        <span> {light}</span>
      </h2>
      {button}
    </div>
  );
}
