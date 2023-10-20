import { Injectable } from '@angular/core';
import { ShopItem } from '../Types/ShopItem.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  shopItems: ShopItem[] = [
    {
      id: 0,
      name: 'MSI Squater Pro',
      price: 199.99,
      category: 'mouse',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../assets/images/Bestsellers/mouse.png',
      isAvailable: true,
      isGuarantee: true,
      isBestseller: true,
    },
    {
      id: 1,
      name: 'MSI Squater Pro',
      price: 199.99,
      category: 'mouse',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../assets/images/Bestsellers/mouse.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 2,
      name: 'MSI Squater Pro',
      price: 199.99,
      category: 'mouse',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../assets/images/Bestsellers/mouse.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 3,
      name: 'MSI Squater Pro',
      price: 199.99,
      category: 'mouse',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../assets/images/Bestsellers/mouse.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 4,
      name: 'Steel Series W550',
      price: 299.99,
      category: 'headphones',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/headphones2.png',
      isAvailable: true,
      isGuarantee: true,
      isBestseller: true,
    },
    {
      id: 5,
      name: 'Steel Series W550',
      price: 299.99,
      category: 'headphones',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/headphones2.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 6,
      name: 'Steel Series W550',
      price: 299.99,
      category: 'headphones',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/headphones2.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 7,
      name: 'Steel Series W550',
      price: 299.99,
      category: 'headphones',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/headphones2.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 8,
      name: 'Razer Ornata V2 Pro',
      price: 149.99,
      category: 'keyboard',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/keyboard.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 9,
      name: 'Razer Ornata V2 Pro',
      price: 149.99,
      category: 'keyboard',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/keyboard.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 10,
      name: 'Razer Ornata V2 Pro',
      price: 149.99,
      category: 'keyboard',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/keyboard.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 11,
      name: 'Razer Ornata V2 Pro',
      price: 149.99,
      category: 'keyboard',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/keyboard.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 12,
      name: 'Krux Leda',
      price: 259.99,
      category: 'pc',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/krux.png',
      isAvailable: true,
      isGuarantee: true,
      isBestseller: true,
    },
    {
      id: 13,
      name: 'Krux Leda',
      price: 259.99,
      category: 'pc',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/krux.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 14,
      name: 'Krux Leda',
      price: 259.99,
      category: 'pc',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/krux.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 15,
      name: 'Krux Leda',
      price: 259.99,
      category: 'pc',
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/krux.png',
      isAvailable: true,
      isGuarantee: true,
    },
  ];

  constructor() {}

  getShopItems() {
    return [...this.shopItems];
  }

  getShopItem(index: number) {
    return this.shopItems[index];
  }

  getBestsellers() {
    return this.shopItems.filter((item) => item.isBestseller);
  }
}
