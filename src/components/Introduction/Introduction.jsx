import React, { useContext } from "react";
import styles from "./Introduction.module.scss";
import { ThemeContext } from "../../contexts/themeContext";
import { Logo, MediumPararellogram, SmallPararellogram } from "../Icons";
import {
  LogoConfig,
  SmallPararelConfig,
  MediumPararelConfig,
} from "../../utils/IconConfig";

export const Introduction = () => {
  const { theme } = useContext(ThemeContext);
  const fill = theme === "light" ? "#444AFF" : "#FFBF5E";
  return (
    <>
      <div className={styles["introduction-logo"]}>
        <Logo {...LogoConfig} />
      </div>
      <div className={styles["introduction-title"]}>
        <h1>YAZILIM PATİKALARI</h1>
        <div className={styles["introduction-text"]}>
          <p>
            Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
            eğitim modelidir. Ekibini büyütmek isteyen şirketler bir
            bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış
            ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar.
            Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul
            alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya
            da sektörde başka şirketlere işe yerleşirler.
          </p>
        </div>
      </div>
      <div className={styles["introduction-pararel"]}>
        <SmallPararellogram {...SmallPararelConfig} fill={fill} />
        <div className={styles["pararel-padding"]}>
          <MediumPararellogram {...MediumPararelConfig} fill={fill} />
        </div>
      </div>
    </>
  );
};
