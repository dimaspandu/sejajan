import { Title } from "@solidjs/meta";
import Layout from "~/components/Layout";
import Hero from "~/components/Hero";
import PatunganCard from "~/components/PatunganCard";
import "../styles/home.scss";

export default function Home() {
  return (
    <Layout>
      <Title>Sejajan - Patungan Jajan Seru</Title>

      <Hero />

      <section class="list">
        <PatunganCard id={1} title="Martabak Manis Coklat Keju" />
        <PatunganCard id={2} title="Pizza Pepperoni Large" />
      </section>

      <section class="how-it-works">
        <h2>Cara Kerja</h2>

        <div class="steps">
          <div class="step">
            <div class="circle">👤</div>
            <p>1. Buat Ajuan/Gabung</p>
          </div>

          <div class="step">
            <div class="circle">💰</div>
            <p>2. Urunan Dana</p>
          </div>

          <div class="step">
            <div class="circle">🍔</div>
            <p>3. Nikmati Bareng!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}