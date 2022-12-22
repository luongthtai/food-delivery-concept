import React from 'react'
import css from "./USPSection.module.scss"
import USPItem from './components/USPItem'

export default function USPSection() {
  return (
    <section id={css.USPSection}>
        <USPItem content="kitchen" number="1"/>
        <USPItem content="specialties" number="11"/>
        <USPItem content="restaurants" number="11"/>
        <USPItem content="transport costs" number="1"/>
    </section>
  )
}
