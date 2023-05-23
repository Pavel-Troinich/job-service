import styles from "./Navbar.module.scss";

function Navbar({ selectedTab, setSelectedTab }) {
  const tabStyle = { color: "#5E96FC", fontWeight: 500 };
  const selectSearch = () => setSelectedTab("search");
  const selectFavorite = () => setSelectedTab("favorite");

  return (
    <>
      <ul className={styles.navbar}>
        <li
          onClick={selectSearch}
          style={selectedTab === "search" ? tabStyle : {}}
        >
          Поиск Вакансий
        </li>
        <li
          onClick={selectFavorite}
          style={selectedTab === "favorite" ? tabStyle : {}}
        >
          Избранное
        </li>
      </ul>
    </>
  );
}

export default Navbar;
