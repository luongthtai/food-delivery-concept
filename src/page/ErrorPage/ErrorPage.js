import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./ErrorPage.module.scss"

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className={css.root}>
      <p>Oops !!!</p>
      <h1>ERROR PAGE</h1>
      <button onClick={() => navigate(-1, {replace: true})}>Go To Back</button>
    </div>
  );
}
