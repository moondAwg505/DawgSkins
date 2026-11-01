// src/mocks/mockSkins.ts
import catalogJson from "./items-ak47.json";
import pricesJson from "./prices-steam.json";
import type { CatalogResponse } from "../type/catalog";
import type { PricesResponse } from "../type/prices";
import type { ISkinsData } from "../type/skins";

const catalog = catalogJson as CatalogResponse;
const prices = pricesJson as PricesResponse;

const priceById = new Map(prices.items.map((p) => [p.item_id, p.lowest_ask / 100]));

export const mockSkins: ISkinsData[] = catalog.items
  .filter((i) => !i.is_stattrak && !i.is_souvenir)
  .flatMap((i) => {
    const price = priceById.get(i.item_id);
    if (price === undefined) return []; // для этого предмета цены нет, пропускаем
    return [{
      id: i.item_id,
      marketHashName: i.market_hash_name,
      img: i.image_url,
      name: `${i.base_name} | ${i.skin_name}`,
      wear: i.wear_name,
      price,
      priceChange: ((i.item_id % 11) - 5) / 2, // временная заглушка от -2.5 до +2.5
    }];
  });