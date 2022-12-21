import React from "react";
import TitleSection from "../../component/TitleSection/TitleSection";
import css from "./RestaurantsSection.module.scss";
import SecondaryButton from "../../component/Button/SecondaryButton/SecondaryButton";

export default function RestaurantsSection() {
  return (
    <section id={css.restaurant}>
      <TitleSection title="Restaurants" button={<SecondaryButton text="show all" />} />
    </section>
  );
}
