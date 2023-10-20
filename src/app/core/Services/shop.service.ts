import { Injectable } from '@angular/core';
import { ShopItem } from '../Types/ShopItem.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  shopItems: ShopItem[] = [
    {
      name: 'Steel Series W550',
      price: 199.99,
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/headphones2.png',
      isAvailable: true,
      isGuarantee: true,
      isBestseller: true,
    },
    {
      name: 'Steel Series W550',
      price: 199.99,
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/mouse2.png',
      isAvailable: true,
      isGuarantee: true,
      isBestseller: true,
    },
    {
      name: 'Steel Series W550',
      price: 199.99,
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/mouse.png',
      isAvailable: true,
      isGuarantee: true,
      isBestseller: true,
    },
  ];

  constructor() {}

  getShopItems() {
    return [...this.shopItems];
  }

  getBestsellers() {
    return this.shopItems.filter((item) => item.isBestseller);
  }
}
