import React, { useState } from "react";
import css from "./LoginPage.module.scss";
import Logo from "../../assits/image/Logo.png";
import svg from "../../assits/image/delivery.svg";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const [pass, setPass] = useState(false);
  const [rePass, setRePass] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      configPass: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Email không đúng với định dạng"
        ),
      password: Yup.string()
        .required("")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),
      configPass: Yup.string()
        .required("")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // dispatch();
  };

  console.log(formik.errors);

  return (
    <section id={css.login}>
      <div id={css.loginPage}>
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
          <form onSubmit={formik.handleSubmit}>
            <h1>TẠO TÀI KHOẢN</h1>
            <div id={css.email}>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Email"
              />
              {formik.errors.email && (
                <p className={css.errors}>{formik.errors.email}</p>
              )}
            </div>

            <div id={css.input}>
              <input
                name="password"
                type={pass ? "text" : "password"}
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Mật Khẩu"
              />
              <div onClick={() => setPass(!pass)}>
                {pass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
              {formik.errors.password && (
                <p className={css.errors}>{formik.errors.password}</p>
              )}
            </div>

            <div id={css.input}>
              <input
                name="configPass"
                type={rePass ? "text" : "password"}
                placeholder="Xác Nhận Lại Mật Khẩu"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div onClick={() => setRePass(!rePass)}>
                {rePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
              {formik.errors.configPass && <p>{formik.errors.configPass}</p>}
            </div>

            <div id={css.check}>
              <input type="checkbox" id="check" name="checked" onChange={formik.handleChange}/>
              <label htmlFor="check">
                Tôi đã đọc và đồng ý với các{" "}
                <a href="/check">Chính Sách Hoạt Động của GreenKitchen</a>
              </label>
            </div>

            <PrimaryButton
              text="Đăng Ký"
              submit={() => handleSubmit()}
              padding="12px"
            />
          </form>

          <div id={css.signIn}>
            <p>
              Bạn đã có tài khoản ? <Link to="/signIn">Đăng nhập</Link>
            </p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
}
