import React, { useContext } from "react";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { CheckBox } from "../CheckBox";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./SignupForm.module.scss";
import { ThemeContext } from "../../contexts/themeContext";
import { DarkIcon, LightIcon } from "../Icons/Icons";
import { ThemeIcons } from "../../utils/IconConfig";
import cx from "classnames";

export const SignupForm = () => {
  const { theme, handleToggle } = useContext(ThemeContext);
  return (
    <>
      <div className={styles["theme-icon"]}>
        {theme === "light" ? (
          <DarkIcon handleClick={handleToggle} {...ThemeIcons} />
        ) : (
          <LightIcon handleClick={handleToggle} {...ThemeIcons} />
        )}
      </div>
      <div className={styles["signup-form-title"]}>
        <h1 className="theme--border">Kayıt</h1>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          passwordConfirmation: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less"),
          lastName: Yup.string().max(20, "Must be 20 characters or less"),
          username: Yup.string()
            .min(3, "En az 3 karakter girebilirsiniz.")
            .required("Kullanıcı adı zorunludur."),
          email: Yup.string()
            .email("Geçerli bir mail adresi girin.")
            .required("E-posta alanı zorunludur."),
          password: Yup.string().required("Şifre alanı zorunludur."),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifreler birbirine uymuyor.")
            .required("Şifre doğrulaması yapmanız gerekiyor."),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf(
              [true],
              "Şözleşmeyi okuduğunuzu ve onayladığınızı kabul etmeniz gerekiyor."
            ),
        })}
      >
        <div
          className={cx(
            "display--flex",
            "flex-column",
            styles["form-container"]
          )}
        >
          <Form>
            <div className={styles["signup-row"]}>
              <div className={styles["row-grow"]}>
                <TextInput
                  label="İsim"
                  name="firstName"
                  type="text"
                  isrequired="false"
                  placeholder="İsminizi giriniz.."
                />
              </div>
              <div className={styles["row-grow"]}>
                <TextInput
                  label="Soyisim"
                  name="lastName"
                  type="text"
                  isrequired="false"
                  placeholder="Soyisminizi giriniz.."
                />
              </div>
            </div>
            <div className={styles["signup-full-row"]}>
              <TextInput
                label="E-Posta"
                name="email"
                type="email"
                isrequired="true"
                placeholder="E-Posta adresinizi giriniz.."
              />
            </div>
            <div className={styles["signup-full-row"]}>
              <TextInput
                label="Kullanıcı Adı"
                name="username"
                type="username"
                isrequired="true"
                placeholder="Kullanıcı adınızı giriniz.."
              />
            </div>
            <div className={styles["signup-full-row"]}>
              <TextInput
                label="Şifre"
                name="password"
                type="password"
                isrequired="true"
                placeholder="Şifrenizi giriniz.."
              />
            </div>
            <div className={styles["signup-full-row"]}>
              <TextInput
                label="Şifrenizi Tekrar Girin"
                name="passwordConfirmation"
                type="password"
                isrequired="true"
                placeholder="Şifrenizi doğrulayın.."
              />
            </div>
            <div
              className={styles["signup-full-row"]}
              style={{ padding: "1rem 0 2rem 0" }}
            >
              <CheckBox name="acceptedTerms">
                Sözleşmeyi kabul ediyorum.
              </CheckBox>
            </div>
            <Button buttonText={"KAYIT OL"} />
          </Form>
        </div>
      </Formik>
    </>
  );
};
