import React from 'react'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi';
import css from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <Link to="/login" className={css.login}>
        <FiUser />
        <span>Log In</span>
    </Link>
  )
}

