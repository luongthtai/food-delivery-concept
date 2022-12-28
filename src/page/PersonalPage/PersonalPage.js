import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "../../redux/reduce/user";
// import { Navigate } from "react-router-dom";
import css from "./PersonalPage.module.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import avatar from "../../assits/image/avatar.png";
import { BsFillPencilFill, BsInstagram } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import Profile from "./components/Profile/Profile";
import bgAvatar from "../../assits/image/bgAvatar.png"

export default function PersonalPage() {
  // const dispatch = useDispatch();

  // const login = useSelector((state) => state.user.login);

  // const handleClick = () => {
  //   dispatch(signOut());
  // };
  return (
    <>
      <Header />
      <section id={css.personalPage}>
        <div id={css.user}>
          <div id={css.avatar}>
            <img src={avatar} alt="avatar" />
            <BsInstagram />
          </div>

          <div id={css.info}>
            <div id={css.nameUser}>
              <h3>Vu Minh Quan</h3>
              <p><BsFillPencilFill /> Sửa hồ sơ</p>
            </div>

            <ul id={css.changeLists}>
                <li><ImUser /></li>
                <li>Hồ sơ</li>
                <li>Địa chỉ</li>
                <li>Đổi mật khẩu</li>
                <li><PrimaryButton color="#fff" text="Đăng xuất" padding="10px" bgColor="#43A12B"/></li>
            </ul>
          </div>

          <img src={bgAvatar} alt="Bg Avatar" id={css.img}/>
        </div>

        <div id={css.contents}>
          <Profile />
        </div>
      </section>
      <Footer />
    </>
  );
}
