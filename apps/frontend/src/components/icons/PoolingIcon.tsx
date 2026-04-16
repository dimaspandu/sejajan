interface IconProps {
  class?: string;
}

export default function PoolingIcon(props: IconProps) {
  return (
    <img
      src="/images/pooling.svg"
      alt="Icon urunan dana"
      class={props.class}
    />
  );
}