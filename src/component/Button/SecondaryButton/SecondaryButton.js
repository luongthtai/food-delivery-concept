import React from "react";
import css from "./SecondaryButton.module.scss";

export default function SecondaryButton({ text }) {
  return <button className={css.button}>{text}</button>;
} 
