import PageTemplate from "../../components/PageTemplate/PageTemplate";
import Filter from "../../components/Filter/Filter";
import VacancyList from "../../components/VacancyList/VacancyList";
import Search from "../../components/Search/Search";
// import vacancies from "../../data/vacancies";
import EmptyList from "../../components/EmptyList/EmptyList";
import { useEffect, useState } from "react";
import axios from "axios";
import { HEADERS, PARAMS, URLS } from "../../config/apiConfig";

function VacancySearch() {
  const [vacancies, setVacancies] = useState(null);
  const [catalogId, setCatalogId] = useState(null);
  const [paymentFrom, setPaymentFrom] = useState(null);
  const [paymentTo, setPaymentTo] = useState(null);
  const [selectedTab, setSelectedTab] = useState("search");

  useEffect(() => {
    async function getData() {
      await axios({
        method: "get",
        url: URLS.auth,
        params: PARAMS.authParams,
        headers: HEADERS,
      }).then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
        console.log(localStorage.getItem("accessToken"));
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
        headers: HEADERS,
      })
        .then((res) => {
          setVacancies(res.data.objects);
          console.log("done");
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
        console.log(paymentFrom, paymentTo);
      })
      .catch((e) => console.log(e));
  };

  return (
    <PageTemplate selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      {vacancies ? (
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
      ) : (
        <EmptyList />
      )}
    </PageTemplate>
  );
}

export default VacancySearch;
