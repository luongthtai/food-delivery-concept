import React from "react";
import css from "./Header.module.scss";
import Logo from "../../assits/image/Logo.png";
import LoginPage from "./component/LoginPage/LoginPage";
import CartPage from "./component/CartPage/CartPage";
import Nav from "./component/Navbar/NavBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={css.root}>
      <Link to="/" id={css.logo}>
        <img src={Logo} alt="Logo" />
      </Link>

      <div className={css.listPage}>
        <LoginPage />
        <CartPage />
        <Nav />
      </div>
    </header>
  );
}
