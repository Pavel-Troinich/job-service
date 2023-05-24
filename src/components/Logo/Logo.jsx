import styles from "./Logo.module.scss";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/job-service")} className={styles.logo}>
      <img src={logo} alt="logo" />
      <span className={styles.logo_text}>Jobored</span>
    </div>
  );
}

export default Logo;
