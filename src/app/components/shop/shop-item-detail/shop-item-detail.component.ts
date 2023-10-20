import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopService } from 'src/app/core/Services/shop.service';
import { ShopItem } from 'src/app/core/Types/ShopItem.model';

@Component({
  selector: 'app-shop-item-detail',
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.scss'],
})
export class ShopItemDetailComponent implements OnInit {
  itemId: number = 0;
  shopItem!: ShopItem;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.itemId = +params['itemId'];
      this.shopItem = this.shopService.getShopItem(this.itemId);
    });
  }
}
