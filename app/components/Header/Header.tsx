import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const navLinks = [
  { label: `Home`, url: `/` },
  { label: `Dashboard`, url: `/dashboard` },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image src="/../../favicon.ico" alt="logo" width={40} height={40} />
      <ul className={styles.navList}>
        {navLinks.map(({ url, label }, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink href={url}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
