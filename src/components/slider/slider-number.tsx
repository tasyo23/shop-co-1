"use client";
import { FunctionComponent, useState } from "react";

interface SliderNumberProps {
  min: number;
  max: number;
  maxData: number;
  minData: number;
}

const SliderNumber: FunctionComponent<SliderNumberProps> = ({
  min,
  maxData,
  minData,
  max,
}) => {
  const [data, setData] = useState<{ minValue: number; maxValue: number }>({
    minValue: min,
    maxValue: max,
  });
  const [value, setValue] = useState(0);
  return (
    <div className="relative">
      <input type="range" />
      <input type="range" />
    </div>
  );
};

export default SliderNumber;
