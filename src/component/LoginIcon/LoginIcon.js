import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi2';
import css from "./LoginIcon.module.scss";

export default function LoginIcon() {
  return (
    <Link to="" className={css.login}>
        <HiOutlineUser />
        <span>User</span>
    </Link>
  )
}

