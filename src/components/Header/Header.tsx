import { ListOfCurrencies } from "./DropDownListOfCurrencies";
import { FavoriteButton } from "./FavoritsButton";
import { Logo } from "./Logo";
import { ProfileButton } from "./ProfileButton";
import { SearchInput } from "./SearchInput";

import style from "./Header.module.css";

interface IHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const Header = ({ search, onSearchChange }: IHeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.header_group}>
        <Logo />
        <SearchInput value={search} onChange={onSearchChange} />
      </div>
      <div className={style.header_button_group}>
        <FavoriteButton />
        <ListOfCurrencies />
        <ProfileButton />
      </div>
    </header>
  );
};

export default Header;
