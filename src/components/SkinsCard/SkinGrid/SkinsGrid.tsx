// Card grid
import style from "./SkinGrid.module.css";
import { SkinCard } from "../SkinCard";
import type { ISkinsData } from "../../../type/skins";

interface SkinsGridProps {
  skins: ISkinsData[];
}

export const SkinGrid = ({ skins }: SkinsGridProps) => {
  return (
  <div className={style.grid}>
    {skins.map((skin) => (
      <SkinCard key={skin.id} SkinData={skin} />
    ))}
  </div>
  )
};

export default SkinGrid;
