import style from "./SkinCard.module.css";
import type { ISkinsData } from "../../type/skins";

import { FavoriteButtonOnSkinsCard } from "./FavoriteButtonOnSkinsCard";
import { PriceChange } from "./PriceChange";
import { formatPrice } from "../../system/utils/formatPrice";

interface SkinProps {
  SkinData: ISkinsData;
}

export const SkinCard = ({ SkinData }: SkinProps) => {
  return (
    <div className={style.wrapper_skins_card}>
      <FavoriteButtonOnSkinsCard />
      <img src={SkinData.img} aria-label={SkinData.name} />
      <div className={style.wrapper_text_skin_card}>
        <span className={style.name_item}>{SkinData.name}</span>
        <span className={style.wear_name_item}>{SkinData.wear}</span>
        <div className={style.wrapper_price}>
          <span className={style.price}>{formatPrice(SkinData.price)}</span>
          <PriceChange value={SkinData.priceChange} />
        </div>
      </div>
    </div>
  );
};

export default SkinCard;
