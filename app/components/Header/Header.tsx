import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Header</h1>
    </header>
  );
};

export default Header;
