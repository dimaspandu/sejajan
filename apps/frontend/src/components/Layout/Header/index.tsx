import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import styles from "./Header.module.scss";

export default function Header() {
  const [open, setOpen] = createSignal(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/patungan", label: "Discover" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  return (
    <header class={styles.navbar}>
      <div class={styles.navbarInner}>
        <div class={styles.navLeft}>
          {navItems.map((item) => (
            <A class={styles.navLink} href={item.href}>
              {item.label}
            </A>
          ))}
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
          {navItems.map((item) => (
            <A
              class={styles.mobileNavLink}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </A>
          ))}
          <button class={styles.authButton}>Log In / Sign Up</button>
        </div>
      )}
    </header>
  );
}
