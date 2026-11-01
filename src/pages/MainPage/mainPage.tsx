import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { SkinGrid } from "../../components/SkinsCard/SkinGrid";
import { mockSkins } from "../../mocks/mockSkins";
import style from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <div className={style.wrapper_MainPage}>
      <Header></Header>
      <Filter></Filter>
        <SkinGrid skins={mockSkins}/>
    </div>
  );
};

export default MainPage;
