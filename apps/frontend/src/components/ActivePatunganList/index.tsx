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
  {
    id: 3,
    title: "Nasi Goreng Seafood",
    progressLabel: "Terkumpul: 60% | Target: Rp 120.000",
    status: "Baru dimulai, ayo gabung!",
    fill: "60%",
    accent: "martabak",
  },
  {
    id: "view-all",
    title: "Lihat Semua Patungan",
    progressLabel: "",
    status: "",
    fill: "0%",
    accent: "view-all",
  },
] as const;

export default function ActivePatunganList() {
  return (
    <section class={styles.homeList} aria-label="Patungan aktif">
      <h2>Patungan Aktif</h2>

      <div class={styles.grid}>
        <For each={patunganItems}>
          {(item) => (
            item.id === "view-all" ? (
              <A href="/patungan" class={`${styles.homeCard} ${styles.viewAll}`}>
                <div class={styles.viewAllContent}>
                  <h3>{item.title}</h3>
                  <span>
                    <svg width="24" height="24" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white">
                      <title>right-arrow</title>
                      <desc>Created with Sketch.</desc>
                      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="white" fill-rule="nonzero">
                          <g id="square-filled" transform="translate(50.000000, 120.000000)">
                            <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
              </A>
            ) : (
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
                    <h3>{item.title}</h3>
                    <p>{item.progressLabel}</p>
                  </div>

                  <div class={styles.cardProgress} aria-hidden="true">
                    <span style={{ width: item.fill }}></span>
                  </div>

                  <strong>{item.status}</strong>
                </div>
              </A>
            )
          )}
        </For>
      </div>
    </section>
  );
}