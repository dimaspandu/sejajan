import { Title } from "@solidjs/meta";
import Layout from "~/components/Layout";
import HomeHero from "~/components/HomeHero";
import ActivePatunganList from "~/components/ActivePatunganList";
import HowItWorks from "~/components/HowItWorks";

export default function Home() {
  return (
    <Layout>
      <Title>Sejajan - Patungan Jajan Seru</Title>

      <HomeHero />
      <ActivePatunganList />
      <HowItWorks />
    </Layout>
  );
}
