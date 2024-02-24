import styles from "./page.module.css";
import ScrollableList from "../components/ScrollableList/ScrollableList";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleDescription}>
          <h1 className={styles.title}>Next.js 14 Demo App</h1>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              This is my demo project where I practice and demonstrate different
              Next.js 14 features.
            </p>
            <p className={styles.description}>
              So far I have implemented the following features:
            </p>
          </div>
        </div>
        <ScrollableList />
      </div>
    </main>
  );
};

export default Home;
