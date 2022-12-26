import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import css from "./CartIcon.module.scss"

export default function CartIcon() {
  return (
    <Link to="/cartPage" className={css.CartIcon}>
        <AiOutlineShoppingCart />
        <span>0</span>
    </Link>
  )
}
