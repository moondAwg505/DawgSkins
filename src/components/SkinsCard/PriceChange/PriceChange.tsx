import style from "./PriceChange.module.css";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface PriceChangeProps {
  value: number;
}

export const PriceChange = ({ value }: PriceChangeProps) => {
  const isUp = value >= 0;

  return (
    <span className={isUp ? style.price_up : style.price_down}>
      {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      {Math.abs(value)}%
    </span>
  );
};

export default PriceChange;