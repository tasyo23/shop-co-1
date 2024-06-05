import { count } from "console";
import { FunctionComponent } from "react";

interface RatingProps {
  count: number;
  className?: String;
}

const Rating: FunctionComponent<RatingProps> = ({ count, className }) => {
  const stars = [];

  const star = (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
        fill="#FFC633"
      />
    </svg>
  );

  for (let i = 0; i < Math.floor(count); i++) {
    stars.push(star);
  }
  if (count - Math.floor(count) > 0) {
    stars.push(
      <svg
        width="11"
        height="21"
        viewBox="0 0 11 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
          fill="#FFC633"
        />
      </svg>
    );
  }
  return (
    <div className={`flex ${className}`}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
