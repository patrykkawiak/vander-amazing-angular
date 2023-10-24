import { Injectable, OnInit } from '@angular/core';
import { Card } from '../Types/Card.model';
import { ShopItem } from '../Types/ShopItem.model';
import { Subject } from 'rxjs';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root',
})
export class CardService implements OnInit {
  cardItemsSubject: Subject<Card> = new Subject<Card>();
  cardItems: Card = {
    products: [],
    totalPrice: 0,
  };

  constructor(private shopService: ShopService) {}

  addItemToCard(item: ShopItem) {
    this.shopService.increaseAmount(item.id);
    if (this.cardItems.products.includes(item)) {
      this.cardItems.totalPrice += item.price;
    } else {
      this.cardItems.products.push(item);
      this.cardItems.totalPrice += item.price;
    }

    this.cardItemsSubject.next(this.cardItems);
  }

  changeAmount(id: number, value: number) {
    const index = this.cardItems.products.findIndex((item) => item.id === id);
    console.log(index);
    const amontSnapshot = this.cardItems.products[index].amount;
    this.cardItems.products[index].amount = value;
    this.cardItems.totalPrice =
      this.cardItems.totalPrice -
      this.cardItems.products[index].price! * amontSnapshot! +
      this.cardItems.products[index].price! * value;

    this.cardItemsSubject.next(this.cardItems);
  }

  ngOnInit(): void {}

  getPrice() {
    return this.cardItems.totalPrice;
  }

  getItems() {
    return this.cardItems;
  }
}
