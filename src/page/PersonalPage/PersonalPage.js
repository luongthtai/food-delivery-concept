import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/reduce/user";
import { Navigate } from "react-router-dom";
import css from "./PersonalPage.module.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

export default function PersonalPage() {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.user.login);

  const handleClick = () => {
    dispatch(signOut());
  };
  return (
    <>
      <Header />
      <section id={css.personalPage}>
        {login ? "" : <Navigate to="/signIn" />}

        <h1>PersonalPage</h1>
        <div
          onClick={handleClick}
          style={{
            cursor: "pointer",
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            width: "20%",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          Sign Out
        </div>
      </section>
      <Footer />
    </>
  );
}
