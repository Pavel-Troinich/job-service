import PageTemplate from "../../components/PageTemplate/PageTemplate";
import Filter from "../../components/Filter/Filter";
import VacancyList from "../../components/VacancyList/VacancyList";
import Search from "../../components/Search/Search";
import EmptyList from "../../components/EmptyList/EmptyList";
import { useEffect } from "react";
import axios from "axios";
import { HEADERS, PARAMS, URLS } from "../../config/apiConfig";

function VacancySearch({
  paymentFrom,
  paymentTo,
  catalogId,
  vacancies,
  selectedTab,
  setVacancies,
  setCatalogId,
  setPaymentFrom,
  setPaymentTo,
  setSelectedTab,
}) {
  useEffect(() => {
    async function getData() {
      await axios({
        method: "get",
        url: URLS.auth,
        params: PARAMS.authParams,
        headers: HEADERS,
      }).then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
      });
      await axios({
        method: "get",
        url: URLS.vacancies,
        params: {
          published: 1,
          payment_from: paymentFrom,
          payment_to: paymentTo,
          catalogues: catalogId,
        },
        headers: {
          ...HEADERS,
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
        .then((res) => {
          setVacancies(res.data.objects);
        })
        .catch((e) => console.log(e));
    }
    getData();
  }, []);

  const searchVacancy = () => {
    axios({
      method: "get",
      url: URLS.vacancies,
      params: {
        published: 1,
        no_agreement: 1,
        count: 50,
        payment_from: paymentFrom,
        payment_to: paymentTo,
        catalogues: catalogId,
      },
      headers: HEADERS,
    })
      .then((res) => {
        setVacancies(res.data.objects);
      })
      .catch((e) => console.log(e));
  };

  return (
    <PageTemplate selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      {!vacancies ? (
        <EmptyList setSelectedTab={setSelectedTab} />
      ) : selectedTab === "search" ? (
        <>
          <Filter
            setPaymentFrom={setPaymentFrom}
            setPaymentTo={setPaymentTo}
            setCatalogId={setCatalogId}
            onclick={searchVacancy}
          />
          <div>
            <Search />
            <VacancyList vacancies={vacancies} />
          </div>
        </>
      ) : localStorage.favoriteVacancies &&
        JSON.parse(localStorage.favoriteVacancies).length !== 0 ? (
        <VacancyList vacancies={JSON.parse(localStorage.favoriteVacancies)} />
      ) : (
        <EmptyList setSelectedTab={setSelectedTab} />
      )}
    </PageTemplate>
  );
}

export default VacancySearch;
