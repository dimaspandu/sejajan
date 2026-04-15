import { Title } from "@solidjs/meta";
import Layout from "~/components/Layout";

export default function HowItWorksPage() {
  return (
    <Layout>
      <Title>How It Works</Title>

      <section>
        <h1>How It Works</h1>
        <p>
          Sejajan helps people open a group order, collect contributions, and
          enjoy food together without over-ordering alone.
        </p>

        <ol>
          <li>Create or join a patungan.</li>
          <li>Contribute your share before the deadline.</li>
          <li>Wait for the target to be completed and enjoy together.</li>
        </ol>
      </section>
    </Layout>
  );
}
