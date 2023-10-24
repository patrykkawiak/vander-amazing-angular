import { ShopItem } from "./ShopItem.model";

export interface Card {
  products: ShopItem[];
  totalPrice: number;
}
