import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi2';
import css from "./LoginIcon.module.scss";

export default function LoginIcon() {
  return (
    <Link to="login" className={css.login}>
        <HiOutlineUser />
        <span>Log In</span>
    </Link>
  )
}

