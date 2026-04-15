import styles from "./PatunganDetailSummary.module.scss";

type PatunganDetailSummaryProps = {
  title: string;
  imageUrl: string;
  target: string;
  collected: string;
  contributors: string;
  remainingTime: string;
  ctaLabel: string;
};

export default function PatunganDetailSummary(
  props: PatunganDetailSummaryProps,
) {
  return (
    <div class={styles.summarySection}>
      <section class={styles.summaryCard}>
        <div class={styles.mediaPanel}>
          <img
            class={styles.mediaImage}
            src={props.imageUrl}
            alt={props.title}
          />
        </div>

        <div class={styles.contentPanel}>
          <h1 class={styles.title}>{props.title}</h1>

          <div class={styles.fundTarget}>
            <span class={styles.targetLabel}>Target Dana:</span>
          </div>

          <div class={styles.fundProgressBlock}>
            <div class={styles.fundProgressText}>
              <span class={styles.fundProgressCaption}>Terkumpul:</span>
              <span class={styles.fundProgressValue}>{props.collected}</span>
            </div>
            <div class={styles.targetValue}>Target {props.target}</div>
          </div>

          <div class={styles.progressTrack}>
            <div class={styles.progressFill} />
          </div>

          <div class={styles.summaryMeta}>
            <span>Penyetor: {props.contributors}</span>
            <span>Sisa Waktu: {props.remainingTime}</span>
          </div>
        </div>
      </section>

      <button class={styles.joinButton}>{props.ctaLabel}</button>
    </div>
  );
}
