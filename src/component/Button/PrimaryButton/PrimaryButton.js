import React from 'react'
import css from "./PrimaryButton.module.scss"

export default function PrimaryButton({text}) {
  return (
    <button className={css.button}>{text}</button>
  )
}
