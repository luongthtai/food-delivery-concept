import React from "react";
import css from "./AdressItem.module.scss";
import PrimaryButton from "../../../../../component/Button/PrimaryButton/PrimaryButton";

export default function AdressItem() {
  return (
    <div id={css.addressItem}>
      <div id={css.intr}>
        <div id={css.user}>
          <p id={css.name}>VuMinhQuan</p>
          <p id={css.phoneNumber}>+ 0853530067</p>
        </div>

        <div id={css.address}>
          <p>127/3 , Nova street, Orange District, New York City</p>
        </div>
      </div>

      <div id={css.setting}>
        <div>
          <p id={css.update}>Cập nhật</p>
          <p id={css.delete}>Xóa</p>
        </div>

        <PrimaryButton
          bgColor="var(--white)"
          color="var(--greenColor)"
          padding="4px 8px"
          text="Thiết lập mặc định"
          border="1px solid var(--greenColor)"
        />
      </div>
    </div>
  );
}
