import styles from "./VacancyCard.module.scss";
import unsaved from "../../assets/unsaved.png";
import location from "../../assets/location.png";

function VacancyCard({ vacancy }) {
  return (
    <div className={styles.vacancy}>
      <div className={styles.vacancy_title}>
        <p>{vacancy.profession}</p>
        <div>
          <img src={unsaved} alt="unsaved" />
        </div>
      </div>
      <div className={styles.vacancy_salary}>
        <p>
          <span className={styles.vacancy_salary_amount}>
            зп от {vacancy.payment_from} rub
          </span>
          <span> &#8226; </span>
          <span>{vacancy.type_of_work.title}</span>
        </p>
      </div>
      <div>
        <p className={styles.vacancy_location}>
          <img src={location} alt="location" />
          <span> {vacancy.town.title}</span>
        </p>
      </div>
    </div>
  );
}

export default VacancyCard;
