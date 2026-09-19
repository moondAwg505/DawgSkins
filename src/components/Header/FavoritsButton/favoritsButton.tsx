import style from "./favoritsButton.module.css";
import { Heart } from "lucide-react";

export const FavoriteButton = () => {
  return (
    <button
      type="button"
      className={style.favorite_button}
      aria-label="Favorite button"
    >
      <Heart className={style.favorite_icon} color="#b20dba"/>
    </button>
  );
};

export default FavoriteButton;
