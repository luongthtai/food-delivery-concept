import React from "react";
import css from "./MapSection.module.scss";
import map from "../../assits/image/Map.png"

export default function MapSection() {
  return (
    <section id={css.map}>
      <img src={map} alt="map"/>
      {/* <iframe
        title="myMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501810.42269955925!2d106.6787125913866!3d10.704068397062265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671867461320!5m2!1svi!2s"
        style={{border: "none", maxHeight: "100%", width: "100%" }}
      ></iframe> */}
    </section>
  );
}
