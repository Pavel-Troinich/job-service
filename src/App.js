import "./App.css";
import { useRoutes } from "react-router-dom";
import VacancySearch from "./Pages/VacancySearch/VacancySearch";
import { useState } from "react";
import VacancyDetails from "./Pages/VacancyDetails/VacancyDetails";

function App() {
  const [vacancies, setVacancies] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [catalogId, setCatalogId] = useState(null);
  const [paymentFrom, setPaymentFrom] = useState(null);
  const [paymentTo, setPaymentTo] = useState(null);
  const [selectedTab, setSelectedTab] = useState("search");

  return useRoutes([
    {
      path: "job-service",
      element: (
        <VacancySearch
          vacancies={vacancies}
          catalogId={catalogId}
          paymentFrom={paymentFrom}
          paymentTo={paymentTo}
          selectedTab={selectedTab}
          setVacancies={setVacancies}
          setCatalogId={setCatalogId}
          setPaymentFrom={setPaymentFrom}
          setPaymentTo={setPaymentTo}
          setSelectedTab={setSelectedTab}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      ),
    },
    {
      path: "job-service/vacancy/:id",
      element: (
        <VacancyDetails
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      ),
    },
  ]);
}

export default App;
