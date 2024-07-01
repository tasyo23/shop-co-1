"use client";
import { FunctionComponent, useState } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  maxData: number;
  minData: number;
}

const RangeSlider: FunctionComponent<RangeSliderProps> = ({
  min,
  maxData,
  minData,
  max,
}) => {
  const [data, setData] = useState<{ minValue: number; maxValue: number }>({
    minValue: min,
    maxValue: max,
  });
  return (
    <div className="relative">
      <input type="range" 
      className="thumb w-full" 
      min={minData} max={maxData} value={data.minValue} 
      onChange={e => setData({ ...data, minValue: +e.target.value })} />
      <input type="range" 
      className="thumb  w-full"
       min={minData} max={maxData} value={data.maxValue}
        onChange={e=>setData({...data, maxValue:+e.target.value})} />
    </div>
  );
};

export default RangeSlider;
