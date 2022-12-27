import React, { useState } from "react";
import css from "./SignIn.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import svg from "../../assits/image/delivery.svg";
import Logo from "../../assits/image/Logo.png";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../redux/reduce/user";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignIn() {
  const [pass, setPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Email không đúng với định dạng"
        ),
      password: Yup.string()
        .required("")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),
    }),
  });

  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.user.login);

  const isLogins = () => {
    if (
      formik.errors.email === undefined &&
      formik.errors.password === undefined &&
      formik.values.email !== ""
    ) {
      dispatch(loginUser());
    }
  };

  return (
    <section id={css.signInPage}>
      {isLogin ? <Navigate to="/" /> : ""}

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
            <h1>ĐĂNG NHẬP</h1>

            <div id={css.email}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <p>{formik.errors.email}</p>}
            </div>

            <div id={css.input}>
              <input
                type={pass ? "text" : "password"}
                name="password"
                placeholder="Mật Khẩu"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <div onClick={() => setPass(!pass)}>
                {pass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
              {formik.errors.password && <p>{formik.errors.password}</p>}
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
      </div>
    </section>
  );
}
