import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <>
      <ul className={styles.navbar}>
        <li>Поиск Вакансий</li>
        <li>Избранное</li>
      </ul>
    </>
  );
}

export default Navbar;
