import React, { useState } from "react";
import css from "./SignIn.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Footer from "../../component/Footer/Footer";
import svg from "../../assits/image/delivery.svg";
import Logo from "../../assits/image/Logo.png";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../redux/reduce/user";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [pass, setPass] = useState(false);

  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.user.login);

  const isLogins = () => {
    dispatch(loginUser());
  };

  return (
    <>
      {isLogin ? <Navigate to="/" /> : ""}

      <section id={css.loginPage}>
        <div id={css.loginContent}>
          <img src={Logo} alt="logo" id={css.logo} />

          <div className={css.root}>
            <div>
              <img src={svg} alt="svg" />
              <p>Sản phẩm tươi 100% từ Pháp</p>
            </div>

            <div>
              <img src={svg} alt="svg" />
              <p>Giao hàng trong 30ph</p>
            </div>

            <div>
              <img src={svg} alt="svg" />
              <p>Free shipping</p>
            </div>
          </div>
        </div>

        <div id={css.form}>
          <form>
            <h1>ĐĂNG NHẬP</h1>

            <input type="email" placeholder="Email" />

            <div id={css.input}>
              <input type={pass ? "text" : "password"} placeholder="Mật Khẩu" />
              <div onClick={() => setPass(!pass)}>
                {pass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>

            <div id={css.forgot}>
              <p>Quên mật khẩu ?</p>
            </div>

            <PrimaryButton
              text="Đăng Nhập"
              padding="12px"
              submit={() => isLogins()}
            />
          </form>

          <div id={css.signIn}>
            <p>
              Bạn đã có tài khoản chưa ? <Link to="/login">Đăng Ký</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
