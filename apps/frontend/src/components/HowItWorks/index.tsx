import styles from "./HowItWorks.module.scss";

const steps = [
  {
    title: "1. Buat Ajuan/Gabung",
    iconClass: "person",
    tone: "peach",
  },
  {
    title: "2. Urunan Dana",
    iconClass: "coin",
    tone: "blue",
  },
  {
    title: "3. Nikmati Bareng!",
    iconClass: "group",
    tone: "mint",
  },
] as const;

export default function HowItWorks() {
  return (
    <section class={styles.howItWorks}>
      <h2>Cara Kerja</h2>

      <div class={styles.steps}>
        {steps.map((step) => (
          <div class={styles.step}>
            <div class={`${styles.circle} ${styles[step.tone]}`}>
              <span class={`${styles.stepIcon} ${styles[step.iconClass]}`}></span>
            </div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}