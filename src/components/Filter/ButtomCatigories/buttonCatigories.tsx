import React, { useState } from "react";
import style from "./buttonCatigories.module.css";

// Массив категорий
const catigories = [
  "All",
  "Knife",
  "Gloves",
  "Sniper Rifles",
  "Shotgun",
  "SMG",
  "Rifles",
  "Machinegun",
  "Stikers",
];

// Пропсы для активного состяния кнопки
interface ButtonProps {
  onSelect?: (category: string) => void;
}

export const Catigories: React.FC<ButtonProps> = ({ onSelect }) => {
  const [isActive, setIsActive] = useState("All");

  // Смена состояния кнопки на активное
  const handleClick = (category: string) => {
    setIsActive(category);
    onSelect?.(category);
  };

  return (
    <div
      className={style.catigories_group}
      role="group"
      aria-label="Фильтр по категориям"
    >
      {/* Перечесление массива с категориями и их последуюущий рендер */}
      {catigories.map((catigories) => (
        <button
          key={catigories}
          className={`${style.button_catigories} ${catigories === isActive ? style.active : ""}`}
          onClick={() => handleClick(catigories)}
          type="button"
          aria-pressed={catigories === isActive}
        >
          {catigories}
        </button>
      ))}
    </div>
  );
};

export default Catigories;
