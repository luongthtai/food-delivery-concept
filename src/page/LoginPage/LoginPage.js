import React, { useState } from "react";
import css from "./LoginPage.module.scss";
import Logo from "../../assits/image/Logo.png";
import svg from "../../assits/image/delivery.svg";
import Footer from "../../component/Footer/Footer";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const [pass, setPass] = useState(false);
  const [rePass, setRePass] = useState(false);

  return (
    <>
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
            <h1>TẠO TÀI KHOẢN</h1>

            <input type="email" placeholder="Email" />

            <div id={css.input}>
              <input type={pass ? "text" : "password"} placeholder="Mật Khẩu" />
              <div onClick={() => setPass(!pass)}>
                {pass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>

            <div id={css.input}>
              <input
                type={rePass ? "text" : "password"}
                placeholder="Xác Nhận Lại Mật Khẩu"
              />
              <div onClick={() => setRePass(!rePass)}>
                {rePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>

            <div id={css.check}>
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                Tôi đã đọc và đồng ý với các{" "}
                <a href="/check">Chính Sách Hoạt Động của GreenKitchen</a>
              </label>
            </div>

            <PrimaryButton text="Đăng Ký" />
          </form>

          <div id={css.signIn}>
            <p>
              Bạn đã có tài khoản ? <Link to="/signIn">Đăng nhập</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}