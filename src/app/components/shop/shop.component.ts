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


  // do usnięcia, uzyc selecta zamiast checkboxa :)

  allFilter: boolean = true;
  headphonesFilter: boolean = false;
  keyboardsFilter: boolean = false;
  pcFilter: boolean = false;
  mouseFilter: boolean = false;

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopItems = this.shopService.getShopItems();
  }
}
