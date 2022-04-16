import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ buttonText }) => {
  return (
    <>
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </>
  );
};
