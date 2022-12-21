import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import css from "./NavBar.module.scss";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../../redux/reduce/reduce";


export default function Nav() {
  const dispatch = useDispatch()

  return (
    <div className={css.nav} onClick={() => {
      dispatch(changeStatus())
    }}> 
      <AiOutlineMenu />
    </div>
  );
}
