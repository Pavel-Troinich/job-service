import styles from "./EmptyList.module.scss";
import man from "../../assets/man.png";

function EmptyList({ setSelectedTab }) {
  const searchVacancy = () => {
    setSelectedTab("search");
  };

  return (
    <div className={styles.empty}>
      <div>
        <img src={man} alt="man" />
      </div>
      <p className={styles.empty_msg}>Упс, здесь еще ничего нет!</p>
      <button className={styles.empty_btn} onClick={searchVacancy}>
        Поиск Вакансий
      </button>
    </div>
  );
}

export default EmptyList;
