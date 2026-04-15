import ContributorCard, { type Contributor } from "~/components/ContributorCard";
import styles from "./PatunganDetailContributors.module.scss";

type PatunganDetailContributorsProps = {
  contributors: Contributor[];
};

export default function PatunganDetailContributors(
  props: PatunganDetailContributorsProps,
) {
  return (
    <section class={styles.contributorsSection}>
      <h3 class={styles.heading}>
        Daftar Penyetor ({props.contributors.length} orang)
      </h3>

      <div class={styles.contributorsGrid}>
        {props.contributors.map((contributor) => (
          <ContributorCard user={contributor} />
        ))}
      </div>
    </section>
  );
}
