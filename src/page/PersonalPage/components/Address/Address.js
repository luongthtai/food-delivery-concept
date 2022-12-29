import React from "react";
import css from "./Address.module.scss";
import TitleSection from "../../../../component/TitleSection/TitleSection";
import AdressItem from "./AdressItem/AdressItem";
import PrimaryButton from "../../../../component/Button/PrimaryButton/PrimaryButton";

export default function Address() {
  return (
    <section id={css.address}>
      <TitleSection title="Địa chỉ của tôi" />

      <div id={css.content}>
        <div id={css.addressLists}>
          <AdressItem />
        </div>
        <PrimaryButton
          bgColor="var(--white)"
          color="var(--greenColor)"
          padding="5px 10px"
          text="Mặc định"
          border="1px solid var(--greenColor)"
        />
      </div>
    </section>
  );
}
