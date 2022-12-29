import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/reduce/user";
import { Navigate } from "react-router-dom";
import css from "./PersonalPage.module.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import avatar from "../../assits/image/avatar.png";
import { BsFillPencilFill, BsInstagram } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import bgAvatar from "../../assits/image/bgAvatar.png";
import Address from "./components/Address/Address";
import Profile from "./components/Profile/Profile";
import ChangePass from "./components/ChangePass/ChangePass";

export default function PersonalPage() {
  const [pages, setPages] = useState(1);

  const dispatch = useDispatch();

  const login = useSelector((state) => state.user.login);

  const handleClick = () => {
    dispatch(signOut());
  };

  const changePage = (value) => {
    setPages(value);
  };

  return (
    <>
      {login ? "" : <Navigate to="/signIn" />}
      <Header />
      <section id={css.personalPage}>
        <div id={css.user}>
          <div id={css.info}>
            <div id={css.avatar}>
              <img src={avatar} alt="avatar" />
              <div id={css.icon}>
                <BsInstagram />
              </div>
            </div>
            <div id={css.nameUser}>
              <h3>Vu Minh Quan</h3>
              <p>
                <BsFillPencilFill /> Sửa hồ sơ
              </p>
            </div>
          </div>

          <ul id={css.changeLists}>
            <ImUser />
            <li onClick={() => changePage(1)}>
              <p style={{ color: pages === 1 ? "var(--greenColor)" : "" }}>
                Hồ sơ
              </p>
            </li>
            <li onClick={() => changePage(2)}>
              <p style={{ color: pages === 2 ? "var(--greenColor)" : "" }}>
                Địa chỉ
              </p>
            </li>
            <li onClick={() => changePage(3)}>
              <p style={{ color: pages === 3 ? "var(--greenColor)" : "" }}>
                Đổi mật khẩu
              </p>
            </li>
            <div id={css.signOut}>
              <PrimaryButton
                color="#fff"
                text="Đăng xuất"
                padding=" 5px 10px"
                bgColor="var(--greenColor)"
                submit={handleClick}
              />
            </div>
          </ul>

          <img src={bgAvatar} alt="Bg Avatar" id={css.img} />
        </div>

        <div id={css.contents}>
          {pages === 1 ? (
            <Profile />
          ) : pages === 2 ? (
            <Address />
          ) : (
            <ChangePass />
          )}
        </div>

        <div id={css.signOutHide}>
          <PrimaryButton
            color="var(--greenColor)"
            text="Đăng xuất"
            padding=" 5px 10px"
            bgColor="var(--white)"
            submit={handleClick}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
