import React from "react";
import styles from "./CheckBox.module.scss";
import { useField } from "formik";
import cx from "classnames";

export const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className={cx(styles["container"], "container")}>
        <input
          type="checkbox"
          className={styles["checkbox"]}
          {...field}
          {...props}
        />
        <span className={styles["checkmark"]}></span>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={styles["checkbox-error"]}>{meta.error}</div>
      ) : null}
    </>
  );
};
