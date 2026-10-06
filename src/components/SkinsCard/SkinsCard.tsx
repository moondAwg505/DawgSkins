import style from "./SkinCard.module.css";
import type { ISkinsData } from "../../type/skins";

import { ArrowDownLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface SkinProps {
  SkinData: ISkinsData;
}

export const SkinsCard = ({ SkinData }: SkinProps) => {
  const isUp = SkinData.priceChange >= 0;

  return (
    <div className={style.wrapper_skins_card}>
      <img src={SkinData.img} aria-label={SkinData.name} />
      <div className={style.wrapper_text_skin_card}>
        <span className={style.name_item}>{SkinData.name}</span>
        <span className={style.wear_name_item}>{SkinData.wear}</span>
        <div className={style.wrapper_price}>
          <span className={style.price}>${SkinData.price}</span>
          <span className={isUp ? style.price_up : style.price_down}>
            {isUp ? <ArrowUpRight /> : <ArrowDownLeft />}{" "}
            {Math.abs(SkinData.priceChange)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkinsCard;
