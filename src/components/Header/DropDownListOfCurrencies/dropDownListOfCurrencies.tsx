// Импорты
import style from "./dropDownListOfCurrencies.module.css";
import { useState } from "react";
import { ChevronsDown } from "lucide-react";

// Иконки валют
import DollarIcon from "../../../assets/img/Dollar logo.svg";
import RublesIcon from "../../../assets/img/Rubles logo.svg";

// Типы волют
type Currency = "USD" | "RUB";

// Массив волют
const currencies: { code: Currency; label: string; icon: string }[] = [
  { code: "USD", label: "USD", icon: DollarIcon },
  { code: "RUB", label: "RUB", icon: RublesIcon },
];

export const ListOfCurrencies = () => {
  // Дефолтное состояние
  const [isOpen, setIsopen] = useState(false);
  const [selected, setSelected] = useState<Currency>("USD");

  // Выбор валюты
  const current = currencies.find((c) => c.code === selected)!;

  // Закрытие списка после выбора валюты
  const hanldeSelect = (code: Currency) => {
    setSelected(code);
    setIsopen(false);
  };

  return (
    <div className={style.wrapper}>
      <button
        type="button"
        className={style.trigger_button}
        onClick={() => setIsopen((t) => !t)}
        aria-expanded={isOpen}
      >
        <img src={current.icon} alt="" className={style.currencyIcon} />
        <ChevronsDown
          color='#B20DBA'
          className={`${style.chevron} ${isOpen ? style.chevronOpen : ""}`}
        />
      </button>
      {isOpen && (
        <ul className={style.drop_down_list}>
          {currencies.map(({ code, label, icon }) => (
            <li key={code}>
              <button
                type="button"
                className={style.button}
                onClick={() => hanldeSelect(code)}
              >
                <img src={icon} alt="" className={style.currencyIcon} />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListOfCurrencies;
