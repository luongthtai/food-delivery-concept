import React from "react";
import css from "./Footer.module.scss";
import Logo from "../../assits/image/LogoFooter.png";
import App1 from "../../assits/image/app-img1-1.png";
import App2 from "../../assits/image/app-img2-1.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import HeadingFooter from "./components/HeadingFooter/HeadingFooter";
import LinkFooter from "./components/LinkFooter/LinkFooter";

export default function Footer() {
  return (
    <footer>
      <div id={css.logo}>
        <div id={css.contact}>
          <img src={Logo} alt="Logo" />
          <div id={css.app}>
            <img src={App1} alt="App Store" />
            <img src={App2} alt="Google Play" />
          </div>
        </div>

        <div id={css.internet}>
          <BsInstagram />
          <BsTwitter />
          <BsFacebook />
        </div>
      </div>

      <div id={css.footerContent}>
        <div id={css.items}>
          <div id={css.contentItem}>
            <HeadingFooter text="About us" />

            <div>
              <LinkFooter text="Concept" />
              <LinkFooter text="Franchise" />
              <LinkFooter text="Business" />
              <LinkFooter text="Restaurant signup" />
              <LinkFooter text="For Investors" />
            </div>
          </div>

          <div id={css.contentItem}>
            <HeadingFooter text="Get help" />

            <div>
              <LinkFooter text="Read FAQs" />
              <LinkFooter text="Restaurants" />
              <LinkFooter text="Specialities" />
              <LinkFooter text="Sign up to deliver" />
              <LinkFooter text="English" />
            </div>
          </div>

          <div id={css.contentItem}>
            <HeadingFooter text="Contact us" />

            <p>Yellow kitchen Paris 11</p>
            <p>69 avenue de la Republique 75011 Paris</p>
            <p>0834 538 680</p>
            <p>luongthetai2705@gmail.com</p>
          </div>
        </div>

        <div id={css.info}>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>© 2020 Yellow kitchen</p>
        </div>
      </div>
    </footer>
  );
}
