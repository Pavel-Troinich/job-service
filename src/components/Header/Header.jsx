import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

function Header({ selectedTab, setSelectedTab }) {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
}

export default Header;
