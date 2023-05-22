import styles from "./PageTemplate.module.scss";
import Header from "../Header/Header";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default PageTemplate;
