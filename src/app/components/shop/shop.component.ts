import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/core/Services/shop.service';
import { ShopItem } from 'src/app/core/Types/ShopItem.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  shopItems: ShopItem[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopItems = this.shopService.getShopItems();
  }

}
