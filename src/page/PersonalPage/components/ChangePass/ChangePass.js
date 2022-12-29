import React from "react";
import css from "./ChangePass.module.scss";
import TitleSection from "../../../../component/TitleSection/TitleSection";
import { useFormik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../../../component/Button/PrimaryButton/PrimaryButton";

export default function ChangePass() {
  const formik = useFormik({
    initialValues: {
      password: "",
      newpass: "",
      configNewpass: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),

      newpass: Yup.string()
        .required("")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),

      configNewpass: Yup.string()
        .required("")
        .oneOf([Yup.ref("newpass"), null], "Password must match"),
    }),
  });

  return (
    <section id={css.changePass}>
      <TitleSection title="Đổi mật khẩu" />

      <form id={css.content} onSubmit={formik.handleSubmit}>
        
        <div>
          <label>Mật khẩu hiện tại</label>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <p>{formik.errors.password}</p>
        </div>
        <div>
          <label>Mật khẩu mới</label>
          <input
            name="newpass"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <p>{formik.errors.newpass}</p>
        </div>
        <div>
          <label>Xác nhận mật khẩu</label>
          <input
            name="configNewpass"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <p>{formik.errors.configNewpass}</p>
        </div>

        <PrimaryButton
          text="Xác nhận"
          bgColor="var(--greenColor)"
          color="var(--white)"
          padding="5px 15px"
        />
      </form>
    </section>
  );
}
