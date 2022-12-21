import React from "react";
import css from "./ShippingComponent.module.scss";
import svg from "../../assits/image/delivery.svg";

export default function ShippingComponent() {
  return (
    <div className={css.root}>
      <div>
        <img src={svg} alt="svg" />
        <p>delivery in all paris in less than 30 minutes</p>
      </div>

      <div>
        <img src={svg} alt="svg" />
        <p>delivery in all paris in less than 30 minutes</p>
      </div>

      <div>
        <img src={svg} alt="svg" />
        <p>delivery in all paris in less than 30 minutes</p>
      </div>
    </div>
  );
}
