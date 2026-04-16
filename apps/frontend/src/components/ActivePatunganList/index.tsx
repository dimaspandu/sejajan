import { For } from "solid-js";
import { A } from "@solidjs/router";
import styles from "./ActivePatunganList.module.scss";

const patunganItems = [
  {
    id: 1,
    title: "Martabak Manis Coklat Keju",
    progressLabel: "Terkumpul: 75% | Target: Rp 150.000",
    status: "3 orang baru saja bergabung",
    fill: "75%",
    accent: "martabak",
  },
  {
    id: 2,
    title: "Pizza Pepperoni Large",
    progressLabel: "Terkumpul: 90% | Target: Rp 200.000",
    status: "Hampir penuh! Sisa 2 porsi",
    fill: "88%",
    accent: "pizza",
  },
] as const;

export default function ActivePatunganList() {
  return (
    <section class={styles.homeList} aria-label="Patungan aktif">
      <For each={patunganItems}>
        {(item) => (
          <A href={`/patungan/${item.id}`} class={`${styles.homeCard} ${styles[item.accent]}`}>
            <div class={`${styles.cardThumb} ${styles[item.accent]}`}>
              <div class={styles.foodIllustration} aria-hidden="true"></div>
            </div>

            <div class={styles.cardBody}>
              <div class={styles.cardAvatars} aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <small>+3 more</small>
              </div>

              <div class={styles.cardCopy}>
                <h2>{item.title}</h2>
                <p>{item.progressLabel}</p>
              </div>

              <div class={styles.cardProgress} aria-hidden="true">
                <span style={{ width: item.fill }}></span>
              </div>

              <strong>{item.status}</strong>
            </div>
          </A>
        )}
      </For>
    </section>
  );
}