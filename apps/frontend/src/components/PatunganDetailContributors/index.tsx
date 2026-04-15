import { For } from "solid-js";
import ContributorCard, { type Contributor } from "~/components/ContributorCard";
import styles from "./PatunganDetailContributors.module.scss";

type PatunganDetailContributorsProps = {
  contributors: Contributor[];
  title: string;
};

export default function PatunganDetailContributors(
  props: PatunganDetailContributorsProps,
) {
  return (
    <section class={styles.contributorsSection}>
      <div class={styles.headerRow}>
        <h3 class={styles.heading}>
          {props.title} ({props.contributors.length} orang)
        </h3>
        <span class={styles.liveBadge}>Aktif</span>
      </div>

      <div class={styles.contributorsGrid}>
        <For each={props.contributors}>
          {(contributor) => <ContributorCard user={contributor} />}
        </For>
      </div>
    </section>
  );
}
