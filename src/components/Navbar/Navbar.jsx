import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

function Navbar({ selectedTab, setSelectedTab }) {
  const navigate = useNavigate();
  const tabStyle = { color: "#5E96FC", fontWeight: 500 };
  const selectSearch = () => {
    setSelectedTab("search");
    navigate("/job-service");
  };
  const selectFavorite = () => {
    setSelectedTab("favorite");
    navigate("/job-service");
  };

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
