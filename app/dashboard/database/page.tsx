import styles from "./page.module.css";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM users WHERE id = 1`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const Database: React.FC = async () => {
  //

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Database</h3>
    </section>
  );
};

export default Database;
