import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <span>About Us</span>
      <span>FAQ</span>
      <span>Terms</span>
    </footer>
  );
}
