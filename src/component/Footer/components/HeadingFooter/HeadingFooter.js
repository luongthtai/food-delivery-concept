import React from "react";
import css from "./HeadingFooter.module.scss"

export default function HeadingFooter({ text }) {
  return <h1 id={css.heading}>{text}</h1>;
}
