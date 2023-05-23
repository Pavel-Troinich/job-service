import styles from "./Filter.module.scss";
import catalog from "../../data/catalog";
import close from "../../assets/close.png";

function Filter({ setCatalogId, setPaymentFrom, setPaymentTo, onclick }) {
  const handleCatalogId = (e) => {
    setCatalogId(e.target.dataset.id);
    console.log(e.target.dataset.id);
  };

  const handlePaymentFrom = (e) => {
    setPaymentFrom(e.target.value);
    console.log(e.target.value);
  };

  const handlePaymentTo = (e) => {
    setPaymentTo(e.target.value);
    console.log(e.target.value);
  };

  const handleReset = () => {
    setCatalogId(null);
    setPaymentFrom(null);
    setPaymentTo(null);
  };

  return (
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
        <select className={styles.select} defaultValue="Выберите отрасль">
          <option
            selected
            disabled
            hidden
            className={styles.select_placeholder}
          >
            Выберите отрасль
          </option>
          {catalog.map((item) => (
            <option onClick={handleCatalogId} data-id={item.key} key={item.key}>
              {item.title_rus}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className={styles.subtitle}>Оклад</p>
        <input
          onChange={handlePaymentFrom}
          min="0"
          step="100"
          className={styles.input}
          placeholder="От"
          type="number"
        />
        <input
          onChange={handlePaymentTo}
          min="0"
          step="100"
          className={styles.input}
          placeholder="До"
          type="number"
        />
      </div>
      <button onClick={onclick} className={styles.btn}>
        Применить
      </button>
    </div>
  );
}

export default Filter;
