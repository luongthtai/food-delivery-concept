import React from "react";
import css from "./Header.module.scss";
import Logo from "../../assits/image/Logo.png";
import Nav from "./component/Navbar/NavBar";
import { Link } from "react-router-dom";
import LoginIcon from "../LoginIcon/LoginIcon";
import CartIcon from "../CartIcon/CartIcon";

export default function Header() {
  return (
    <header className={css.root}>
      <Link to="/" id={css.logo}>
        <img src={Logo} alt="Logo" />
      </Link>

      <div className={css.listPage}>
        <LoginIcon />
        <CartIcon />
        <Nav />
      </div>
    </header>
  );
}
