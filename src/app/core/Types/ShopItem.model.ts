export interface ShopItem {
  // kategoria potem na dalszym etapie zamieni się w ENUMA zamiast stringa!
  id: number;
  name: string;
  price: number;
  category: string;
  producentId: string | number;
  description: string;
  image: string | string[];
  isAvailable: boolean;
  isGuarantee: boolean;
  isBestseller?: boolean;
}
