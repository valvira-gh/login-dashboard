"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

interface Props {
  href: string;
  children: React.ReactNode;
}

const DashboardLink: React.FC<Props> = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <button
      type="button"
      className={`${styles.link} ${active ? styles.active : ""}`}
    >
      {children}
    </button>
  );
};

export default DashboardLink;
