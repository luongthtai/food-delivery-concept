import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import css from "./CartPage.module.scss"

export default function CartPage() {
  return (
    <Link to="cartPage" className={css.CartPage}>
        <AiOutlineShoppingCart />
        <span>0</span>
    </Link>
  )
}
