import React from "react";
import ShippingComponent from "../component/ShippingComponent/ShippingComponent";
import HeroSection from "./HeroSection/HeroSection";
import Header from "../component/Header/Header";
import RestaurantsSection from "./RestaurantsSection/RestaurantsSection";
import FindReaRest from "./FindReaRest/FindReaRest";
import Footer from "../component/Footer/Footer";
import MapSection from "./Map/MapSection";
import InfoSection from "./InfoSection/InfoSection";
import USPSection from "./USPSection/USPSection";
import Specialities from "./Specialities/Specialities";
import ScrollToTop from "../router/ScollToTop";

export default function HomePage() {
  return (
    <>
      <ScrollToTop />

      <section>
        <Header />
        <HeroSection />
        <ShippingComponent />
      </section>
      <main>
        <RestaurantsSection />
        <FindReaRest />
        <Specialities />
        <USPSection />
        <MapSection />
        <InfoSection />
      </main>

      <Footer />
    </>
  );
}
