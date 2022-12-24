import React, { useState } from "react";
import css from "./ProductItem.module.scss";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductItem({ image, nameProduct, price }) {
  const [heart, setHeart] = useState(false);

  return (
    <div id={css.productItem}>
      <div id={css.image}>
        <img src={image} alt={nameProduct} />
      </div>

      <div id={css.infoProduct}>
        <div id={css.item}>
          <h3>{nameProduct}</h3>
          <p>${price}</p>
        </div>

        <BsHeartFill
          style={{ color: heart ? "var(--heartColor)" : "" }}
          onClick={() => setHeart(!heart)}
        />
      </div>

      <div id={css.buy}>
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
}
