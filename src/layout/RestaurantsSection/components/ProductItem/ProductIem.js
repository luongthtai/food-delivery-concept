import React from "react";
import css from "./ProductItem.module.scss";

export default function ProductIem({ image, alt, nameProduct, price }) {
  return (
    <div id={css.productItem}>
      <img src={image} alt={alt} />

      <div>
        <h3>{nameProduct}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
