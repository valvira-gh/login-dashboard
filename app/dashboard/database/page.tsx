"use client";
import styles from "./page.module.css";
import AddUserForm from "./AddUserForm";
import { sql } from "@vercel/postgres";
import { useState, useEffect } from "react";

interface Props {
  id: number;
  name: string;
  email: string;
  password: string;
}

const Database: React.FC = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Database</h3>
      {/* <AddUserForm /> */}
    </section>
  );
};

export default Database;
