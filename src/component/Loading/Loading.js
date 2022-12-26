import React from 'react'
import css from "./Loading.module.scss"

export default function Loading() {
  return (
    <div id={css.loading}>
        <h2>Loading . . .</h2>
    </div>
  )
}
