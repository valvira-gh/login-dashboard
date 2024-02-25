import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const navLinks = [
  { label: `Home`, url: `/` },
  { label: `Dashboard`, url: `/dashboard` },
  { label: `Login`, url: `/login` },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Image src="/../../favicon.ico" alt="logo" width={50} height={50} />
        <ul className={styles.navList}>
          {navLinks.map(({ url, label }, index) => (
            <li key={index} className={styles.navItem}>
              <NavLink href={url}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
