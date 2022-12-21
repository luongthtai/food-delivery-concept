import React from "react";
import { Link } from "react-router-dom";
import css from "./ErrorPage.module.scss"

export default function ErrorPage() {
  return (
    <div className={css.root}>
      <p>Oops !!!</p>
      <h1>ERROR PAGE</h1>
      <Link to="/">Back To Home</Link>
    </div>
  );
}
