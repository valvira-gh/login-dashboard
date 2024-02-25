import styles from "./page.module.css";
import DashboardLink from "./DashboardLink";

const linkData = [
  { id: 1, label: `User Settings`, url: `/dashboard/settings` },
  { id: 2, label: `Analytics`, url: `/dashboard/analytics` },
  { id: 3, label: `Billing`, url: `/dashboard/billing` },
  { id: 4, label: `Logout`, url: `/logout` },
];

const DashboardPanel: React.FC = () => {
  return (
    <div className={styles.dashboardPanel}>
      <h3 className={styles.title}>Dashboard</h3>
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          {linkData.map(
            ({ id, label, url }): React.ReactNode =>
              id < 4 && (
                <li key={id} className={styles.linkItem}>
                  <DashboardLink href={url}>{label}</DashboardLink>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPanel;
