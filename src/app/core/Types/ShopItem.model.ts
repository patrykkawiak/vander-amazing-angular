export interface ShopItem {
  name: string;
  price: number;
  producentId: string | number;
  description: string;
  image: string | string[];
  isAvailable: boolean;
  isGuarantee: boolean;
  isBestseller?: boolean;
}
