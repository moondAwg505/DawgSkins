import { useState } from "react";
import style from "./FavoriteButtonOnSkinsCard.module.css";
import { Heart } from "lucide-react";

export const FavoriteButtonOnSkinsCard: React.FC = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleClick = () => {
    setButtonActive((buttonActive) => !buttonActive);
  };

  const buttonClass = `${style.btn} ${buttonActive ? [style.active_button] : ""}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      <Heart className={style.heart} />
    </button>
  );
};

export default FavoriteButtonOnSkinsCard;
