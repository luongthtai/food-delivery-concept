import React from "react";
import css from "./FindReaRest.module.scss";
import PrimaryButton from "../../component/Button/PrimaryButton/PrimaryButton";

export default function FindReaRest() {
  return (
    <section id={css.root}>
      <div className={css.findRearestContent}>
        <h2>Your nearest restaurants</h2>
        <p>
          Each kitchen works with its own delivery area to deliver food to you
          as soon as possible
        </p>
      </div>

      <form>
        <div id={css.input}>
          <input type="text" required placeholder="	&#xf3c5; Enter delivery address"/>
        </div>

        <PrimaryButton text="send" />                
      </form>
    </section>
  );
}
