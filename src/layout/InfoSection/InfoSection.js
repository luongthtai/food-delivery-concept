import React from "react";
import css from "./InfoSection.module.scss";
import TitleSection from "../../component/TitleSection/TitleSection";
import info1 from "../../assits/image/Info1.png";
import info2 from "../../assits/image/Info2.png";
import info3 from "../../assits/image/Info3.png";
import info4 from "../../assits/image/Info4.png";

export default function InfoSection() {
  return (
    <section id={css.infoSection}>
      <TitleSection light="in instagram" title="#YellowKitchens" />

      <div id={css.infoImage}>
        <div>
          <img src={info1} alt="info1" />

          <a href="/">#Instagram</a>
        </div>

        <div>
          <img src={info2} alt="info1" />
          <a href="/">#Instagram</a>
        </div>
        
        <div>
          <img src={info3} alt="info1" />
          <a href="/">#Instagram</a>
        </div>
        
        <div>
          <img src={info4} alt="info1" />
          <a href="/">#Instagram</a>
        </div>
      </div>
    </section>
  );
}
