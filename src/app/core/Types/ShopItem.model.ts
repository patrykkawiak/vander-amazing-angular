export interface ShopItem {
  name: string;
  price: number;
  producentId: string | number;
  description: string;
  image: string | string[];
  isBestseller?: boolean;
}
