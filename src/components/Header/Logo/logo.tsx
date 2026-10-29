import style from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={style.wrapper_logo}>
      <p className={style.logo_withe_part_one} aria-label="Logo">
        Dawg
      </p>
      <p className={style.logo_part_two}>Skins</p>
    </div>
  );
};

export default Logo;
