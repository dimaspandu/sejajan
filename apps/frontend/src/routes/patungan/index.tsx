import { Title } from "@solidjs/meta";
import Layout from "~/components/Layout";
import PatunganCard from "~/components/PatunganCard";
import "../../styles/home.scss";

export default function PatunganListingPage() {
  return (
    <Layout>
      <Title>Explore Patungan</Title>

      <section class="hero">
        <div class="hero-left">
          <h1>Explore Active Patungan</h1>
          <p>
            Temukan patungan yang sedang berjalan, lihat target dan waktu
            tersisa, lalu gabung dengan cepat.
          </p>
        </div>

        <div class="hero-right">
          <img loading="lazy" src="https://loremflickr.com/300/200/food" />
        </div>
      </section>

      <section class="list">
        <PatunganCard id={1} title="Martabak Manis Coklat Keju" />
        <PatunganCard id={2} title="Pizza Pepperoni Large" />
        <PatunganCard id={3} title="Dimsum Ayam Saus Bangkok" />
        <PatunganCard id={4} title="Es Kopi Susu Literan" />
      </section>
    </Layout>
  );
}
