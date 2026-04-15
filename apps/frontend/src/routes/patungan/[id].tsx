import { Title } from "@solidjs/meta";
import { type Contributor } from "~/components/ContributorCard";
import PatunganDetailContributors from "~/components/PatunganDetailContributors";
import Layout from "~/components/Layout";
import PatunganDetailSummary from "~/components/PatunganDetailSummary";

export default function Detail() {
  const users: Contributor[] = [
    { name: "Andi Pratama", amount: "Rp45.000", time: "2 menit lalu" },
    { name: "Siti Rahma", amount: "Rp60.000", time: "8 menit lalu" },
    { name: "Budi Santoso", amount: "Rp30.000", time: "12 menit lalu" },
    { name: "Nina Putri", amount: "Rp75.000", time: "20 menit lalu" },
    { name: "Rizky Hadi", amount: "Rp50.000", time: "35 menit lalu" },
    { name: "Dewi Lestari", amount: "Rp40.000", time: "50 menit lalu" },
    { name: "Fajar Nugroho", amount: "Rp25.000", time: "1 jam lalu" },
    { name: "Maya Sari", amount: "Rp80.000", time: "1 jam lalu" },
    { name: "Tono Wijaya", amount: "Rp55.000", time: "2 jam lalu" },
    { name: "Putri Anjani", amount: "Rp70.000", time: "3 jam lalu" },
  ];

  return (
    <Layout>
      <Title>Detail Patungan</Title>

      <PatunganDetailSummary
        title="Patungan Martabak Manis Coklat Keju"
        imageUrl="https://loremflickr.com/400/300/dessert"
        target="Rp250.000"
        collected="Rp115.000"
        contributors="9/12 orang"
        remainingTime="4 jam"
        ctaLabel="Gabung Patungan Ini!"
        organizerLine="Dibuka oleh Andi Pratama • Terbuka untuk umum"
        avatarBadges={["AP", "SR", "BS", "NP", "+5"]}
      />

      <PatunganDetailContributors
        contributors={users}
        title="Daftar Penyetor Budiman"
      />
    </Layout>
  );
}
