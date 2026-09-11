import style from "./favoritsButton.module.css";

export const FavoriteButton = () => {
  return (
    <button
      type="button"
      className={style.favorite_button}
      aria-label="Favorite button"
    ></button>
  );
};

export default FavoriteButton;
