interface IconProps {
  class?: string;
}

export default function EnjoyIcon(props: IconProps) {
  return (
    <img
      src="/images/enjoy.svg"
      alt="Icon nikmati bareng"
      class={props.class}
    />
  );
}