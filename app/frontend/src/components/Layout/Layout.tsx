import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          sejajan
        </Link>

        <nav className={styles.nav}>
          <Link to="/buat">Buat Patungan</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
