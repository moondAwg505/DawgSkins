export interface PriceRow {
  provider: string;
  item_id: number;
  market_hash_name: string;
  lowest_ask: number; // цена в центах
  stale: boolean;
}

export interface PricesResponse {
  items: PriceRow[];
}