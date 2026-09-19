import { ListOfCurrencies } from "./DropDownListOfCurrencies";
import { FavoriteButton } from "./FavoritsButton";
import { Logo } from "./Logo";
import { ProfileButton } from "./ProfileButton";
import { SearchInput } from "./SearchInput";

import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.header_group}>
        <SearchInput />
        <FavoriteButton />
        <ListOfCurrencies />
      </div>
      <ProfileButton />
    </header>
  );
};

export default Header;
