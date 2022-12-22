import React from 'react'
import css from "./MapSection.module.scss"
import map from "../../assits/image/Map.png"

export default function MapSection() {
  return (
    <section id={css.map}>
        <img src={map} alt="map"/>
    </section>
  )
}
