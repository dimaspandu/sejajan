import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPatungan } from "../api/patungan";
import styles from "./CreatePatungan.module.scss";

export default function CreatePatungan() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await createPatungan({
        title,
        target_amount: Number(targetAmount),
      });
      navigate("/");
    } catch (err) {
      alert(
        err instanceof Error ? err.message : "Failed to create patungan"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Buat Patungan</h2>

      <label>
        Judul Patungan
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Target Dana
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          required
        />
      </label>

      <button disabled={loading}>
        {loading ? "Menyimpan..." : "Buat"}
      </button>
    </form>
  );
}
