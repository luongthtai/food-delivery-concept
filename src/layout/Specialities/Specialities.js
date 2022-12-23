import React from "react";
import css from "./Specialities.module.scss";
import TitleSection from "../../component/TitleSection/TitleSection";
import SecondaryButton from "../../component/Button/SecondaryButton/SecondaryButton";
import Slider from "react-slick";
import "./slider.css";
import SpecialitiesItem from "./components/SpecialitiesItem";
import Bagel from "../../assits/image/bagel.svg";
import Burger from "../../assits/image/burger.svg";
import Chicken from "../../assits/image/chicken.svg";
import Fish from "../../assits/image/fish.svg";
import FishChips from "../../assits/image/fishnchips.svg";
import Salads from "../../assits/image/vegan.svg";
import Pizza from "../../assits/image/pizza.svg";
import Pasta from "../../assits/image/raviolli.svg";
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"

export default function Specialities() {
  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 4,
    arrows: true,
    infinite: true,
    accessibility: true,
    nextArrow: <BsArrowRightShort />,
    prevArrow: <BsArrowLeftShort />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section id={css.specialities}>
      <TitleSection
        title="Specialities"
        button={<SecondaryButton text="show all" />}
      />
      <Slider {...settings}>
        <SpecialitiesItem svg={Bagel} text="Bagel" />
        <SpecialitiesItem svg={Burger} text="Burger" />
        <SpecialitiesItem svg={Chicken} text="Chicken" />
        <SpecialitiesItem svg={Fish} text="Fish" />
        <SpecialitiesItem svg={FishChips} text="Fish'Chips" />
        <SpecialitiesItem svg={Salads} text="Salads" />
        <SpecialitiesItem svg={Pizza} text="Pizza" />
        <SpecialitiesItem svg={Pasta} text="Pasta " />
      </Slider>
    </section>
  );
}
