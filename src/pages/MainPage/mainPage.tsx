import style from "./mainPage.module.css";
import { useState } from "react";

import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { SkinGrid } from "../../components/SkinsCard/SkinGrid";
import { mockSkins } from "../../mocks/mockSkins";

export const MainPage = () => {
  // Demo the "Live Search"
  const [search, setSearch] = useState("");

  const searchSkin = mockSkins.filter((skin) =>
    skin.marketHashName.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div className={style.wrapper_MainPage}>
      <Header search={search} onSearchChange={setSearch}></Header>
      <Filter></Filter>
      <SkinGrid skins={searchSkin} />
    </div>
  );
};

export default MainPage;
