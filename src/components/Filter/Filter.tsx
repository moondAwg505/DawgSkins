import { Catigories } from "./ButtomCatigories";
import { DropDownListPriceFilter } from "./DropDownListPriceFilter";
import style from "./Filter.module.css";

export const Filter = () => {
  return (
    <div className={style.wrapper_filter}>
      <Catigories />
      <DropDownListPriceFilter />
    </div>
  );
};

export default Filter;
