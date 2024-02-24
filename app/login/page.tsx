import styles from "./page.module.css";
import Link from "next/link";

const Login: React.FC = () => {
  //

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        Login or
        <br />
        <Link href={"/register-user"}>Register User</Link>
      </h3>
    </section>
  );
};

export default Login;
