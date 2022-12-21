import React from "react";
import ShippingComponent from "../component/ShippingComponent/ShippingComponent";
import HeroSection from "./HeroSection/HeroSection";
import Header from "../component/Header/Header";
import RestaurantsSection from "./RestaurantsSection/RestaurantsSection";
import FindReaRest from "./FindReaRest/FindReaRest";

export default function HomePage() {
  return (
    <>
      <section>
        <Header />
        <HeroSection />
        <ShippingComponent />
      </section>
      <main>
        <RestaurantsSection />
        <FindReaRest />
      </main>
    </>
  );
}
