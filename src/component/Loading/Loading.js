import React from "react";
import ReactLoading from "react-loading";
import css from "./Loading.module.scss"

export default function Loading({ type, color }) {
  return (
    <div id={css.loading}>
      <ReactLoading type={type || "spokes"} color={color || "var(--colorTheme)"} height="auto" width={150} />
    </div>
  );
}
