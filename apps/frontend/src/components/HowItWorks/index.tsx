import styles from "./HowItWorks.module.scss";
import { RequestOrJoinIcon, PoolingIcon, EnjoyIcon } from "../icons";

const steps = [
  {
    title: "1. Buat Ajuan/Gabung",
    Icon: RequestOrJoinIcon,
    tone: "peach",
  },
  {
    title: "2. Urunan Dana",
    Icon: PoolingIcon,
    tone: "blue",
  },
  {
    title: "3. Nikmati Bareng!",
    Icon: EnjoyIcon,
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
              <step.Icon class={styles.stepIcon} />
            </div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}