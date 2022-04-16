import React from "react";
import { useField } from "formik";
import styles from "./TextInput.module.scss";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { isrequired } = props;

  return (
    <>
      <div className={styles["text-input"]}>
        <div className={styles["margin-size"]}>
          <label
            htmlFor={props.id || props.name}
            className={styles["label-size"]}
          >
            {label}
            {isrequired === "true" && (
              <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
            )}
          </label>
        </div>
        <input className={styles["input-height"]} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles["input-error"]}>{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};
