import styles from "./VacancyList.module.scss";
import VacancyCard from "../VacancyCard/VacancyCard";
function VacancyList({ vacancies }) {
  return (
    <div className={styles.list}>
      {vacancies.objects.map((vacancy, i) => {
        return <VacancyCard vacancy={vacancy} key={i} />;
      })}
    </div>
  );
}

export default VacancyList;
