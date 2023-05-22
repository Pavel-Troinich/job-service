import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
