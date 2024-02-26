import styles from "./page.module.css";
import { db } from "@/app/lib/kysely";
import Image from "next/image";
import { seed } from "@/app/lib/createRegistedUsersTable";

const TablePage: React.FC = async () => {
  let users;

  try {
    users = await db.selectFrom("users").selectAll().execute();
  } catch (error: any) {
    if (error.message === `relation "users" does not exist`) {
      console.log(
        `Table does not exist, creating and seeding it with dummy data now...`
      );
      await seed();
      users = await db.selectFrom("users").selectAll().execute();
    } else {
      throw error;
    }
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Table Page</h3>
      <div className={styles.table}>
        <ul className={styles.list}>
          {users.map((user: any) => (
            <div className={styles.card} key={user.id}>
              <li className={styles.listItem}>
                <h5 className={styles.key}>
                  Username: <span className={styles.value}>{user.name}</span>
                </h5>
                <h5 className={styles.key}>
                  Email: <span className={styles.value}>{user.email}</span>
                </h5>
                <h5 className={styles.key}>
                  Password:{" "}
                  <span className={styles.value}>{user.password}</span>
                </h5>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TablePage;
