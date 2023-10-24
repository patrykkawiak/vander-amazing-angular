import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { ShopService } from 'src/app/core/Services/shop.service';
import { ShopItem } from 'src/app/core/Types/ShopItem.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  shopItems: ShopItem[] = [];

  categoryFilter: any = 'all';
  sortFilter: any = '';


  constructor(private shopService: ShopService) {}

  onSelect() {
    if (this.sortFilter === 'cheap') {
      this.shopItems.sort((a: any, b: any): any => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (this.sortFilter === 'expensive') {
      this.shopItems.sort((a: any, b: any): any => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
    } else if (this.sortFilter === 'a-z') {
      this.shopItems.sort((a: any, b: any): any => {
        if (a.name < b.name) {
          return -1;
        }
      });
    } else if (this.sortFilter === 'z-a') {
      this.shopItems.sort((a: any, b: any): any => {
        if (b.name < a.name) {
          return -1;
        }
      });
    }
  }

  ngOnInit() {
    this.shopItems = this.shopService.getShopItems();
  }
}
