import React from "react";
import css from "./ProductItem.module.scss";
import product from "../../../assits/image/product1.png";

export default function ProductItem({ img, name, price, quantity, subTotal }) {
  return (
    <div id={css.productItem}>
      <div id={css.product}>
        <img src={img || product} alt={name || "product"} />
        <span id={css.nameProduct}>{name || "Salad ăn trộm ở Lào"}</span>
      </div>

      <div id={css.price}>{price || "200$"}</div>
      <div id={css.quantity}>{quantity || "2"}</div>
      <div id={css.subTotal}>{subTotal || "400$"}</div>
    </div>
  );
}
