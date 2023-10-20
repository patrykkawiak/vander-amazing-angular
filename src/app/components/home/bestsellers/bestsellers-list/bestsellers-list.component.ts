import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/core/Services/shop.service';
import { ShopItem } from 'src/app/core/Types/ShopItem.model';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss'],
})
export class BestsellersListComponent implements OnInit {
  bestsellers: ShopItem[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.bestsellers = this.shopService.getBestsellers().slice(0, 3);
  }
}
