import { Props } from "./Props";

const CrossIcon = ({ color }: Props): JSX.Element => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${color}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CrossIcon;
