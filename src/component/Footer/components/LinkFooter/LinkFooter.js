import React from "react";
import { Link } from "react-router-dom";
import css from  "./LinkFooter.module.scss";

export default function LinkFooter({ text, link }) {
  return <Link to={link} id={css.link}>{text}</Link>;
}
