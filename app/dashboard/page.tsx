import styles from "./page.module.css";

const dashboardLinks = [
  { label: `User Settings`, url: `/dashboard/settings` },
  { label: `Analytics`, url: `/dashboard/analytics` },
  { label: `Billing`, url: `/dashboard/billing` },
  { label: `Logout`, url: `/logout` },
];

const Dashboard: React.FC = () => {
  //

  return (
    <section className={styles.dashboard}>
      <h3 className={styles.title}>Dashboard</h3>
    </section>
  );
};

export default Dashboard;
