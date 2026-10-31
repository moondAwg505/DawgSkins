export interface CatalogItem {
  item_id: number;
  market_hash_name: string;
  base_name: string;
  skin_name: string;
  wear_name: string;
  is_stattrak: boolean;
  is_souvenir: boolean;
  image_url: string;
}

export interface CatalogResponse {
  items: CatalogItem[]
}