import styles from "./VacancyCard.module.scss";
import unsaved from "../../assets/unsaved.png";
import saved from "../../assets/saved.png";
import location from "../../assets/location.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VacancyCard({ vacancy }) {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const saveVacancy = () => {
    if (!isSaved) {
      setIsSaved(true);
      let favoriteVacancies;
      if (localStorage.favoriteVacancies) {
        favoriteVacancies = JSON.parse(localStorage.favoriteVacancies);
      } else favoriteVacancies = [];
      favoriteVacancies.push(vacancy);
      localStorage.favoriteVacancies = JSON.stringify(favoriteVacancies);
    } else {
      setIsSaved(false);
      let favoriteVacancies = JSON.parse(localStorage.favoriteVacancies);
      favoriteVacancies.splice(favoriteVacancies.indexOf(vacancy), 1);
      localStorage.favoriteVacancies = JSON.stringify(favoriteVacancies);
    }
  };

  const openVacancy = () => navigate(`vacancy/${vacancy.id}`);

  return (
    <div data-elem={`vacancy-${vacancy.id}`} className={styles.vacancy}>
      <div className={styles.vacancy_title}>
        <p onClick={openVacancy}>{vacancy.profession}</p>
        <button
          data-elem={`vacancy-${vacancy.id}-shortlist-button`}
          onClick={saveVacancy}
        >
          <img src={isSaved ? saved : unsaved} alt="save" />
        </button>
      </div>
      <div className={styles.vacancy_salary}>
        <p>
          <span className={styles.vacancy_salary_amount}>
            зп от {vacancy.payment_from} до {vacancy.payment_to}{" "}
            {vacancy.currency}
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
