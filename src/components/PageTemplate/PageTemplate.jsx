import styles from "./PageTemplate.module.scss";
import Header from "../Header/Header";

function PageTemplate({ selectedTab, setSelectedTab, children }) {
  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default PageTemplate;
