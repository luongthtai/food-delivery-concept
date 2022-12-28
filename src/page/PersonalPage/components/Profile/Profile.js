import React, { useState } from "react";
import css from "./Profile.module.scss";
import TitleSection from "../../../../component/TitleSection/TitleSection";
import ProfileItem from "./ProfileItem/ProfileItem";
import PrimaryButton from "../../../../component/Button/PrimaryButton/PrimaryButton";
import { BsInstagram } from "react-icons/bs";
import avatar from "../../../../assits/image/avatar.png";
import DatePicker from "react-date-picker";

export default function Profile() {
    const [ value, onChange] = useState(new Date())

  return (
    <section id={css.profile}>
      <TitleSection title="Hồ sơ của tôi" />

      <form id={css.profileItems}>
        <div id={css.contentTop}>
          <div id={css.contentLeft}>
            <ProfileItem info="Họ và Tên" content="Vũ Minh Quân" />
            <ProfileItem info="Email" content="quandesign2022@gmail.com" />
            <ProfileItem info="Số điện thoại" content="0853830067" />
          </div>

          <div id={css.contentRight}>
            <div id={css.avatar}>
              <img src={avatar} alt="avatar" />
              <BsInstagram />
            </div>
            <PrimaryButton
              bgColor="#fff"
              text="Chọn ảnh"
              color="#000"
              border="1px solid var(--grayLight)"
              padding="10px"
            />
          </div>
        </div>

        <div id={css.gender}> 
          <p>Giới tính</p>
          <input type="radio" id="men" name="gender" value="men"/>
          <label htmlFor="men">Nam</label>
          <input type="radio" id="women" name="gender" value="women"/>
          <label htmlFor="women">Nữ</label>
          <input type="radio" id="order" name="gender" value="order"/>
          <label htmlFor="order">Khác</label>
        </div>

        <div id={css.date}>
            <DatePicker onChange={onChange} value={value} />
        </div>

        <PrimaryButton bgColor="#43A12B" color="#fff" text="Gui" padding="5px 15px"/>
      </form>
    </section>
  );
}
