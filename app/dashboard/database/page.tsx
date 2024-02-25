import styles from "./page.module.css";
import { PrismaClient } from "@prisma/client";
import { FetchUsersBtn } from "./actions";

const Database: React.FC = async () => {
  //

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Database</h3>
      <FetchUsersBtn />
    </section>
  );
};

export default Database;
