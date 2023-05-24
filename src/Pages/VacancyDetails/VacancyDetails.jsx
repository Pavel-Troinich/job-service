import styles from "./VacancyDetails.module.scss";
import VacancyCard from "../../components/VacancyCard/VacancyCard";
import parse from "html-react-parser";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HEADERS, URLS } from "../../config/apiConfig";
import EmptyList from "../../components/EmptyList/EmptyList";

function VacancyDetails({ selectedTab, setSelectedTab }) {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${URLS.vacancies}/${id}`,
      headers: {
        ...HEADERS,
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    })
      .then((res) => {
        setVacancy(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {!vacancy ? (
        <EmptyList setSelectedTab={setSelectedTab} />
      ) : (
        <div className={styles.details}>
          <VacancyCard vacancy={vacancy} />
          <div className={styles.details_description}>
            {parse(vacancy.vacancyRichText)}
          </div>
        </div>
      )}
    </>
  );
}

export default VacancyDetails;
