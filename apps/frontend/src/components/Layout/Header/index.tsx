import { createSignal } from "solid-js";
import styles from "./Header.module.scss";

export default function Header() {
  const [open, setOpen] = createSignal(false);

  return (
    <header class={styles.navbar}>
      <div class={styles.navbarInner}>
        <div class={styles.navLeft}>
          <a>Home</a>
          <a>Discover</a>
          <a>How It Works</a>
        </div>

        <div class={styles.navRight}>
          <button class={styles.authButton}>Log In / Sign Up</button>

          <button
            class={`${styles.menuToggle} ${open() ? styles.menuToggleActive : ""}`}
            onClick={() => setOpen(!open())}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open() && (
        <div class={styles.mobileMenu}>
          <a>Home</a>
          <a>Discover</a>
          <a>How It Works</a>
          <button class={styles.authButton}>Log In / Sign Up</button>
        </div>
      )}
    </header>
  );
}
