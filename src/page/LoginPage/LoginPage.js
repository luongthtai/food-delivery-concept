import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi2';
import css from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <Link to="/login" className={css.login}>
        <HiOutlineUser />
        <span>Log In</span>
    </Link>
  )
}

