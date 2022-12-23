import React from "react";
import TitleSection from "../../component/TitleSection/TitleSection";
import css from "./RestaurantsSection.module.scss";
import SecondaryButton from "../../component/Button/SecondaryButton/SecondaryButton";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";
import Product1 from "../../assits/image/product1.png"
import Product2 from "../../assits/image/product2.png"
import Product3 from "../../assits/image/product3.png"
import Product4 from "../../assits/image/product4.png"
import ProductItem from "./components/ProductItem/ProductIem";

export default function RestaurantsSection() {
  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    arrows: true,
    accessibility: true,
    infinite: true,
    nextArrow: <BsArrowRightShort />,
    prevArrow: <BsArrowLeftShort />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section id={css.restaurant}>
      <TitleSection title="Restaurants" button={<SecondaryButton text="show all" />} />

    <Slider {...settings}>
      <ProductItem image={Product1} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product2} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product3} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product4} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product2} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product3} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product1} nameProduct="Burger" price="1.00"/>
      <ProductItem image={Product4} nameProduct="Burger" price="1.00" />
    </Slider>
    </section>
  );
}
