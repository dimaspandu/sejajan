import { A } from "@solidjs/router";

export default function PatunganCard(props: { id: number; title: string }) {
  return (
    <A href={`/patungan/${props.id}`} class="patungan-card">
      <img src="https://loremflickr.com/200/200/food" />

      <div class="content">
        <h3>{props.title}</h3>
        <p>Terkumpul: 75% • Target: Rp 150.000</p>

        <div class="progress">
          <div class="bar"></div>
        </div>

        <div class="meta">
          <span>Penyetor: 12 orang</span>
          <span>Sisa Waktu: 5 jam</span>
        </div>
      </div>
    </A>
  );
}