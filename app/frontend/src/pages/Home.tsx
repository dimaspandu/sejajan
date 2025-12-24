import { usePatungans } from "../hooks/usePatungans";
import PatunganCard from "../components/PatunganCard";
import EmptyState from "../components/EmptyState/EmptyState";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const { patungans, loading, error } = usePatungans();

  if (loading) return <p>Memuat patungan...</p>;
  if (error) return <p>❌ {error}</p>;

  if (patungans.length === 0) {
    return (
      <EmptyState
        title="Belum ada patungan"
        description="Jadilah yang pertama membuat patungan di Sejajan"
        action={
          <Link to="/buat" className={styles.cta}>
            Buat Patungan
          </Link>
        }
      />
    );
  }

  return (
    <div className={styles.container}>
      {patungans.map((p) => (
        <PatunganCard key={p.id} patungan={p} />
      ))}
    </div>
  );
}
