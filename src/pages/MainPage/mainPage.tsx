import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import style from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <div className={style.wrapper_MainPage}>
      <Header></Header>
      <Filter></Filter>
      {/* <section className={style.skin_grid_section}>
                
            </section> */}
    </div>
  );
};

export default MainPage;
