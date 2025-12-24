import { Link } from "react-router-dom";
import { type Patungan } from "../../types/patungan";
import styles from "./PatunganCard.module.scss";

interface PatunganCardProps {
  patungan: Patungan;
}

export default function PatunganCard({ patungan }: PatunganCardProps) {
  const progress =
    Math.min(
      (patungan.collected_amount / patungan.target_amount) * 100,
      100
    );

  return (
    <Link
      to={`/patungan/${patungan.id}`}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        {patungan.image_url ? (
          <img
            src={patungan.image_url}
            alt={patungan.title}
          />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {patungan.title}
        </h3>

        <p className={styles.amount}>
          Rp {patungan.collected_amount.toLocaleString()} /{" "}
          Rp {patungan.target_amount.toLocaleString()}
        </p>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.meta}>
          <span>
            {patungan.contributor_count} orang
          </span>
          <span className={styles.status}>
            {patungan.status === "active"
              ? "Aktif"
              : patungan.status === "completed"
              ? "Tercapai"
              : "Berakhir"}
          </span>
        </div>
      </div>
    </Link>
  );
}
