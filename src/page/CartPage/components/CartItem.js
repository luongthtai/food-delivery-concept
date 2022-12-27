import React from "react";
import css from "./CartItem.module.scss";
import { AiFillDelete } from "react-icons/ai";
import image from "../../../assits/image/product1.png";

export default function CartItem({img, name, price, quantity}) {
  return (
    <tr id={css.cartItem}>
      <td id={css.productItem}>
        <img src={img || image} alt="" />

        <div>
          <h3>{name || "Product Name"}</h3>
          <p>Brand & Name</p>
        </div>
      </td>

      <td>{price || "$14.00"}</td>

      <td id={css.quantity}>
        <button>-</button>
        <span>{quantity || 1}</span>
        <button>+</button>
      </td>

      <td id={css.button}>
        <button>
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
}
