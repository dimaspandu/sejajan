interface IconProps {
  class?: string;
}

export default function RequestOrJoinIcon(props: IconProps) {
  return (
    <img
      src="/images/request-or-join.svg"
      alt="Icon buat ajuan atau gabung"
      class={props.class}
    />
  );
}