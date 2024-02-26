import styles from "./page.module.css";
import { db } from "@/app/lib/kysely";
import Image from "next/image";
import { seed } from "@/app/lib/createRegisteredUsersTable";

const TablePage: React.FC = async () => {
  let users;

  try {
    users = await db.selectFrom("registered_users").selectAll().execute();
  } catch (error: any) {
    if (error.message === `relation "users" does not exist`) {
      console.log(
        `Table does not exist, creating and seeding it with dummy data now...`
      );
      await seed();
      users = await db.selectFrom("registered_users").selectAll().execute();
    } else {
      throw error;
    }
  }

  return (
    <section className={styles.container}>
      {/* Render users data here */}
    </section>
  );
};

export default TablePage;
