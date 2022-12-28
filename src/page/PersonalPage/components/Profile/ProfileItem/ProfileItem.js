import React from 'react'
import css from "./ProfileItem.module.scss"

export default function ProfileItem({info, content}) {
  return (
    <div id={css.profileItem}>
      <p>{info || "Ho va ten"}</p>
      <p>{content || "Vu Minh Quan"} <span>Sửa</span></p>
    </div>
  )
}
