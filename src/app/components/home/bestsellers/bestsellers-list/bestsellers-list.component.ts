import { Component } from '@angular/core';
import { ShopItem } from 'src/app/core/Types/ShopItem.model';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss'],
})
export class BestsellersListComponent {
  bestsellers: ShopItem[] = [
    {
      name: 'Steel Series W550',
      price: 199.99,
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/headphones2.png',
      isBestseller: true,
    },
    {
      name: 'Steel Series W550',
      price: 199.99,
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/mouse2.png',
      isBestseller: true,
    },
    {
      name: 'Steel Series W550',
      price: 199.99,
      producentId: 'RZ03-03380100-R3M1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      image: '../../../../../assets/images/Bestsellers/mouse.png',
      isBestseller: true,
    },
  ];
}
