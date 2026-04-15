import type { JSX } from "solid-js";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";

export default function Layout(props: { children: JSX.Element }) {
  return (
    <main class={styles.page}>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
