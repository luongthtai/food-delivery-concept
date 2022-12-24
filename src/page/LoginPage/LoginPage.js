import React, { useEffect, useState } from "react";
import css from "./LoginPage.module.scss";
import Logo from "../../assits/image/Logo.png";
import svg from "../../assits/image/delivery.svg";
import Footer from "../../component/Footer/Footer";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [pass, setPass] = useState(false);
  const [rePass, setRePass] = useState(false);

  const [config, setConfig] = useState(false);

  const [user, setUser] = useState({
    email: null,
    password: null,
    configPass: null,
  });

  const dispatch = useDispatch()

  const handleChage = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user.password === user.configPass) {
      setConfig(true);
    } else {
      setConfig(false);
    }
  }, [user]);

  const handleSubmit = () => {
    dispatch()
  };

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
            <div>
              <input
                name="email"
                type="email"
                onChange={handleChage}
                placeholder="Email"
              />
              {/* <p id={css.email}>{email ? "" : "ko dung dinh dang"}</p> */}
            </div>

            <div id={css.input}>
              <input
                name="password"
                type={pass ? "text" : "password"}
                onChange={handleChage}
                placeholder="Mật Khẩu"
                required
              />
              <div onClick={() => setPass(!pass)}>
                {pass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
              {/* <p id={css.error}>error</p> */}
            </div>

            <div id={css.input}>
              <input
                name="configPass"
                type={rePass ? "text" : "password"}
                placeholder="Xác Nhận Lại Mật Khẩu"
                onChange={handleChage}
                required
              />
              <div onClick={() => setRePass(!rePass)}>
                {rePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
              <p
                id={css.error}
                style={{ visibility: config ? "hidden" : "initial" }}
              >
                Mat khau chua dung
              </p>
            </div>

            <div id={css.check}>
              <input type="checkbox" id="check" required />
              <label htmlFor="check">
                Tôi đã đọc và đồng ý với các{" "}
                <a href="/check">Chính Sách Hoạt Động của GreenKitchen</a>
              </label>
            </div>

            <PrimaryButton text="Đăng Ký" submit={() => handleSubmit()} padding="12px" />
          </form>

          <div id={css.signIn}>
            <p>
              Bạn đã có tài khoản ? <Link to="/signIn">Đăng nhập</Link>
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
