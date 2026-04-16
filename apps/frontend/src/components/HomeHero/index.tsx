import { A } from "@solidjs/router";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <section class={styles.homeHero}>
      <div class={styles.heroCopy}>
        <span class={styles.heroKicker}>SEJAJAN.ID:</span>
        <h1>Patungan Jajan Seru!</h1>
        <p>
          Urunan beli martabak, pizza, dan makanan lainnya. Lebih hemat,
          lebih nikmat!
        </p>
        <A href="/patungan" class={styles.heroCta}>
          Mulai Patungan Sekarang!
        </A>
      </div>

      <div class={styles.heroVisual}>
        <img
          src="/images/patungan-jajan-ilustrasi.png"
          alt="Ilustrasi patungan jajan dengan berbagai makanan seperti martabak, pizza, burger, dan koin"
          class={styles.heroImage}
        />
      </div>
    </section>
  );
}