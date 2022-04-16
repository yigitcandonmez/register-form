import { SignupForm } from "../../components/";
import { Introduction } from "../../components/";
import styles from "./SignUp.module.scss";
import cx from "classnames";

export const SignUp = () => {
  return (
    <div className={styles["page-register"]}>
      <div className={cx(styles["page-register-left"], "left")}>
        <div className={styles["page-register-left-container"]}>
          <Introduction />
        </div>
      </div>
      <div className={cx(styles["page-register-right"], "right")}>
        <div className={styles["page-register-right-container"]}>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};
