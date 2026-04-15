import { createSignal, onMount } from "solid-js";
import styles from "./ContributorCard.module.scss";

export type Contributor = {
  name: string;
  amount: string;
  time: string;
};

export default function ContributorCard(props: { user: Contributor }) {
  const avatarSrc = "/avatar.png";
  const [canShowAvatar, setCanShowAvatar] = createSignal(false);
  const initials = props.user.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  onMount(() => {
    const image = new Image();
    image.src = avatarSrc;
    image.onload = () => setCanShowAvatar(true);
    image.onerror = () => setCanShowAvatar(false);
  });

  return (
    <div class={styles.user}>
      {canShowAvatar() ? (
        <img
          class={styles.avatar}
          src={avatarSrc}
          alt={props.user.name}
          onError={() => setCanShowAvatar(false)}
        />
      ) : (
        <div class={styles.avatarFallback}>{initials}</div>
      )}
      <div class={styles.userInfo}>
        <p class={styles.userName}>{props.user.name}</p>
        <p class={styles.userMeta}>{props.user.amount}</p>
      </div>
      <span class={styles.userTime}>{props.user.time}</span>
    </div>
  );
}
