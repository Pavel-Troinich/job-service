import PageTemplate from "../../components/PageTemplate/PageTemplate";
import Filter from "../../components/Filter/Filter";
import VacancyList from "../../components/VacancyList/VacancyList";
import Search from "../../components/Search/Search";
import vacancies from "../../data/vacancies";
import EmptyList from "../../components/EmptyList/EmptyList";
import { useState } from "react";

function VacancySearch() {
  const [token, setToken] = useState();
  const url =
    "https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/";
  const data = {
    params: {
      login: "sergei.stralenia@gmail.com",
      password: "paralect123",
      client_id: 2356,
      client_secret:
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      hr: 0,
    },
    headers: {
      "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      "X-Api-App-Id":
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
    },
  };

  // const vacancies = null;
  return (
    <PageTemplate>
      {vacancies ? (
        <>
          <Filter />
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
