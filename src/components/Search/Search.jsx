import styles from "./Search.module.scss";
import search from "../../assets/search.png";

function Search() {
  return (
    <div className={styles.search}>
      <img src={search} alt="search" />
      <input
        data-elem="search-input"
        className={styles.search_input}
        type="text"
        placeholder="Введите название вакансии"
      />
      <button data-elem="search-button" className={styles.search_btn}>
        Поиск
      </button>
    </div>
  );
}

export default Search;
