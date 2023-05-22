import styles from "./Logo.module.scss";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <span className={styles.logo_text}>Jobored</span>
    </div>
  );
}

export default Logo;
