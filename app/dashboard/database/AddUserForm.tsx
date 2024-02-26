import { requestNewUser } from "./actions";
import styles from "./page.module.css";

const AddUserForm = () => {
  return (
    <form action={requestNewUser} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="username"
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default AddUserForm;
