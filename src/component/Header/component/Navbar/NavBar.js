import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import css from "./NavBar.module.scss";

export default function Nav() {
  return (
    <nav className={css.nav}>
      <AiOutlineMenu />
    </nav>
  );
}
