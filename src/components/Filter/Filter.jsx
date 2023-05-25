import styles from "./Filter.module.scss";
import close from "../../assets/close.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { HEADERS, URLS } from "../../config/apiConfig";

function Filter({ setCatalogId, setPaymentFrom, setPaymentTo, onclick }) {
  const [catalogues, setCatalogues] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: URLS.catalogues,
      headers: {
        ...HEADERS,
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    })
      .then((res) => {
        setCatalogues(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleCatalogId = (e) => {
    setCatalogId(e.target.dataset.id);
  };

  const handlePaymentFrom = (e) => {
    setPaymentFrom(e.target.value);
  };

  const handlePaymentTo = (e) => {
    setPaymentTo(e.target.value);
  };

  const handleReset = () => {
    setCatalogId(null);
    setPaymentFrom(null);
    setPaymentTo(null);
  };

  return catalogues ? (
    <div className={styles.filter}>
      <div className={styles.head}>
        <p className={styles.head_title}>Фильтры</p>
        <p className={styles.head_reset} onClick={handleReset}>
          <span>Сбросить все</span>
          <img src={close} alt="close" />
        </p>
      </div>
      <div>
        <p className={styles.subtitle}>Отрасль</p>
        <select
          data-elem="industry-select"
          className={styles.select}
          defaultValue="Выберите отрасль"
        >
          <option
            selected
            disabled
            hidden
            className={styles.select_placeholder}
          >
            Выберите отрасль
          </option>
          {catalogues.map((item) => (
            <option onClick={handleCatalogId} data-id={item.key} key={item.key}>
              {item.title_rus}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className={styles.subtitle}>Оклад</p>
        <input
          data-elem="salary-from-input"
          onChange={handlePaymentFrom}
          min="0"
          step="100"
          className={styles.input}
          placeholder="От"
          type="number"
        />
        <input
          data-elem="salary-to-input"
          onChange={handlePaymentTo}
          min="0"
          step="100"
          className={styles.input}
          placeholder="До"
          type="number"
        />
      </div>
      <button
        data-elem="search-button"
        onClick={onclick}
        className={styles.btn}
      >
        Применить
      </button>
    </div>
  ) : null;
}

export default Filter;
