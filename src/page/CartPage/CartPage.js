import React from "react";
import css from "./CartPage.module.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import TitleSection from "../../component/TitleSection/TitleSection";
import CartItem from "./components/CartItem";
import { Link } from "react-router-dom";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import product2 from "../../assits/image/product2.png"
import product3 from "../../assits/image/product3.png"

export default function CartPage() {
  const handleSubmit = () => {
    console.log("total");
  };

  const cartList = useSelector((state) => state.cart.cartLists);

  console.log(cartList);

  return (
    <>
      <Header />
      <section id={css.cartPage}>
        <TitleSection title="Cart Page" center={true} />
        <p>3 items in your cart</p>

        <div id={css.cartContents}>
          {cartList === [] ? (
            <h2 id={css.error}>Giỏ hàng trống</h2>
          ) : (
            <table id={css.cartLists}>
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Product</th>
                  <th style={{ width: "18%" }}>Price</th>
                  <th style={{ width: "20%" }}>Quantity</th>
                  <th style={{ width: "12%" }}></th>
                </tr>
              </thead>
              <tbody>
                <CartItem />
                <CartItem img={product2}/>
                <CartItem img={product3}/>
              </tbody>
            </table>
          )}

          <div id={css.total}>
            <Link to="/shopping">
              <AiOutlineArrowLeft />
              <span>Continue Shopping</span>
            </Link>

            <div id={css.subTotal}>
              <h3>Subtotal:</h3>
              <p id={css.price}>$00.00</p>

              <PrimaryButton
                text="Checkout"
                padding="10px 24px"
                submit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
