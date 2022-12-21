import React from "react";
import Photo from "../../assits/image/Photo-plate.png";
import css from "./HeroSection.module.scss";
import rucola from "../../assits/image/rucola-png.png"
import arrow from "../../assits/image/arrow.png"
import NavList from "../../component/Header/component/NavList/NavList";

export default function HeroSection() {
  return (
    <section className={css.root}>
      <div className={css.content}>
        <h1>Your Food court at home</h1>

        <div className={css.ship}>
          <div className={css.shipper}>
            <h4>Delivery</h4>
            <p>Order in</p>
          </div>
          <div className={css.shipper}>
            <h4>Takeout</h4>
            <p>Grab and go</p>
          </div>
        </div>
      </div>
      <div className={css.image}>
        <img src={Photo} id={css.product} alt="foot" />
        <img src={rucola} alt="foot" />
        <div id={css.arrow}>
          <img src={arrow}  alt="arrow" />
          <p>Fresh salad, Il Pasifigio</p>
        </div>
      </div>

      <NavList />

    </section>
  );
}
