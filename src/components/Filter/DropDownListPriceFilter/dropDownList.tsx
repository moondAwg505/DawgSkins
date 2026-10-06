import style from "./dropDownList.module.css";
import React, { useState } from "react";
import { ChevronsDown } from "lucide-react";
import { ArrowDownWideNarrow } from "lucide-react";
import { ArrowUpNarrowWide } from "lucide-react";

// Типы
type Price = "default" | "low" | "high";

// Массив фильтра цены
const priceOptions: { value: Price; label: string }[] = [
  { value: "default", label: "Price" },
  { value: "low", label: "Low price" },
  { value: "high", label: "High price" },
];

interface PticeProps {
  onChange?: (order: Price) => void;
}

export const DropDownListPriceFilter: React.FC<PticeProps> = ({ onChange }) => {
  // Состяние компонента
  const [isOpen, setIsOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState<Price>("default");

  // Выбор фильтра
  const hanldeSelect = (value: Price) => {
    setPriceFilter(value);
    setIsOpen(false);
    onChange?.(value);
  };

  // Рендер иконок в зависимости от выбора фильтра
  const renderPriceChangeicon = () => {
    if (priceFilter === "low") return <ArrowDownWideNarrow />;
    if (priceFilter === "high") return <ArrowUpNarrowWide />;
    if (priceFilter === "default") return <ChevronsDown />;
    return <ChevronsDown size={18} />;
  };

  // Рендер статуса в зависимости от выбора фильтра
  const rendrePriceLabel = () => {
    if (priceFilter === "low") return "Low price";
    if (priceFilter === "high") return "High price";
    return "Price";
  };

  return (
    <div className={style.wrapper}>
      <button
        className={style.triger_button}
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        aria-expanded={isOpen}
      >
        {renderPriceChangeicon()}
        <span className={style.filter_text}>{rendrePriceLabel()}</span>
      </button>
      {isOpen && (
        <ul className={style.drop_down_list}>
          {priceOptions.map(({ value, label }) => (
            <li key={value}>
              <button
                className={style.button}
                type="button"
                onClick={() => hanldeSelect(value)}
              >
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownListPriceFilter;
