import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import css from "./NavList.module.scss";
import { useSelector } from "react-redux";
import { BsChevronDown } from "react-icons/bs";

export default function NavList() {
  const statusMenu = useSelector((state) => state.toggle.status);

  const [language, setLanguage] = useState(true);

  return (
    <div
      className={css.navLists}
      style={{ transform: statusMenu ? "translateX(100%)" : "translateX(0)" }}
    >
      <ul>
        <li id={css.info}>
          <IoCallOutline />
          <div>
            <p id={css.phone}>0834 538 680</p>
            <p>8:00-22:00</p>
          </div>
        </li>
        <li>Delivery info</li>
        <li>About us</li>
        <li>Restaurants</li>
        <li>Specialities</li>
      </ul>

      <div id={css.language} onClick={() => {
        setLanguage(!language)
      }}>
        English
        <div style={{ transform: language ? "" : "rotate(-540deg)" }}> 
          <BsChevronDown />
        </div>
      </div>
    </div>
  );
}
