import style from "./favoritsButton.module.css";
import { Heart } from "lucide-react";

export const FavoriteButton = () => {
  return (
    <button
      type="button"
      className={style.favorite_button}
      aria-label="Favorite button"
    >
      <Heart className={style.favorite_icon} />
    </button>
  );
};

export default FavoriteButton;
