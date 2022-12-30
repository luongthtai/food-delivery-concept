import React from "react";
import css from "./Checkout.module.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import TitleSection from "../../component/TitleSection/TitleSection";
import ProductItem from "./productItem/ProductItem";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";

export default function Checkout() {
  return (
    <>
      <Header />
      <section id={css.root}>
        <h1 id={css.titlePage}>Check Out</h1>

        <div id={css.checkout}>
          <div id={css.address}>
            <TitleSection title="Địa chỉ nhận hàng" />
            <div id={css.info}>
              <div id={css.name}>
                <span className={css.title}>Họ & Tên:</span>
                <span className={css.content}>Nguyễn Công Khanh</span>
              </div>

              <div id={css.phone}>
                <span className={css.title}>SĐT:</span>
                <span className={css.content}>0946602812</span>
                <span className={css.setting}>Thay Đổi</span>
              </div>

              <div id={css.loct}>
                <span className={css.title}>Địa chỉ:</span>
                <span className={css.content}>
                  475A Điện Biên Phủ, Bình Thạnh, TP.HCM
                </span>
                <span className={css.setting}>Thay Đổi</span>
              </div>
            </div>
          </div>

          <div id={css.products}>
            <TitleSection title="Sản Phẩm" />

            <div id={css.productsList}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>

          <div id={css.totals}>
            <TitleSection title="Phương thức thanh toán" />

            <div id={css.totalList}>
              <div id={css.payment}>
                <div>
                  <input type="radio" name="pay" value="1" id="money" />
                  <label htmlFor="money">
                    Thanh toán bằng tiền mặt khi nhận hàng
                  </label>
                </div>
                <div>
                  <input type="radio" name="pay" value="2" id="card" />
                  <label htmlFor="card">Visa</label>
                </div>
              </div>

              <div id={css.total}>
                  <div id={css.subtotal}>
                    <span className={css.title}>Tiền sản phẩm: </span>
                    <span className={css.content}>600$</span>
                  </div>
                  
                  <div id={css.ship}>
                    <span className={css.title}>Phí ship: </span>
                    <span className={css.content}>600$</span>
                  </div>

                  <div id={css.sumTotal}>
                    <span className={css.title}>Tổng cộng: </span>
                    <span className={css.content}>1200$</span>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div id={css.button}>
          <PrimaryButton
            text="Đặt Hàng"
            bgColor="var(--greenColor)"
            color="var(--white)"
            padding="8px 30px"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
