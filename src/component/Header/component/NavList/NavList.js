import React from "react";
import { IoCallOutline } from "react-icons/io5";
import css from "./NavList.module.scss"

export default function NavList() {
  return (
    <div className={css.navLists}>
      <ul>
        <li id={css.info}>
          <IoCallOutline />
          <div>
            <p>083458680</p>
            <p>8:00-22:00</p>
          </div>
        </li>
        <li>Delivery info</li>
        <li>About us</li>
        <li>Restaurants</li>
        <li>Specialities</li>
      </ul>
    </div>
  );
}
