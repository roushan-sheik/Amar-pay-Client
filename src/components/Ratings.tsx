import { Star } from "lucide-react";
import React from "react";
type IRating = {
  value: number;
};
const Rating = ({ value }: IRating) => {
  const starts = Array(value).fill(
    <Star width={"14"} height={"14"} className="text-primary" fill="#ff9900" />
  );
  return (
    <div className="flex items-center space-x-1">
      {starts.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;