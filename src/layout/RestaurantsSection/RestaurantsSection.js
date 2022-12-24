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
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }

      style={{display: "flex", justifyContent: "center", alignItems: "center"}}

      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <BsArrowLeftShort style={{fontSize: "35px"}}/>
    </button>
  );
  
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      style={{display: "flex", justifyContent: "center", alignItems: "center"}}

      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <BsArrowRightShort style={{fontSize: "35px"}} />
    </button>
  );

  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    arrows: true,
    accessibility: true,
    infinite: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
