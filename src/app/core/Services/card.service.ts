import { Injectable, OnInit } from '@angular/core';
import { Card } from '../Types/Card.model';
import { ShopItem } from '../Types/ShopItem.model';
import { Subject } from 'rxjs';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardItemsSubject: Subject<Card> = new Subject<Card>();
  cardToggleSubject: Subject<boolean> = new Subject<boolean>();
  isCardToggle = false;
  cardItems: Card = {
    products: [],
    totalPrice: 0,
  };

  toggleCard() {
    this.isCardToggle = !this.isCardToggle;
    this.cardToggleSubject.next(this.isCardToggle);
  }

  setAsCookie() {
    document.cookie = `card=${JSON.stringify(this.cardItems)}`;
  }

  increaseAmount(id: number) {
    const index = this.cardItems.products.findIndex((item) => item.id === id);
    if (this.cardItems.products[index].amount === undefined) {
      this.cardItems.products[index].amount = 1;
    } else {
      this.cardItems.products[index].amount! += 1;
    }
  }

  addItemToCard(item: ShopItem) {
    if (!this.cardItems.products.includes(item)) {
      this.cardItems.products.push(item);
    }
    this.cardItems.totalPrice += item.price;
    this.increaseAmount(item.id);
    this.setAsCookie();
    this.cardItemsSubject.next(this.cardItems);
  }

  changeAmount(id: number, value: number) {
    const index = this.cardItems.products.findIndex((item) => item.id === id);
    const amontSnapshot = this.cardItems.products[index].amount;
    this.cardItems.products[index].amount = value;
    this.cardItems.totalPrice =
      this.cardItems.totalPrice -
      this.cardItems.products[index].price! * amontSnapshot! +
      this.cardItems.products[index].price! * value;
    this.setAsCookie();
    this.cardItemsSubject.next(this.cardItems);
  }

  deleteItem(id: number) {
    const index = this.cardItems.products.findIndex((item) => item.id === id);
    this.cardItems.totalPrice =
      this.cardItems.totalPrice -
      this.cardItems.products[index].amount! *
        this.cardItems.products[index].price;
    this.cardItems.products[index].amount = 0;
    this.cardItems.products.splice(index, 1);
    this.setAsCookie();
    this.cardItemsSubject.next(this.cardItems);
  }

  getPrice() {
    return this.cardItems.totalPrice;
  }

  getItems() {
    return this.cardItems;
  }

  setItems(items: Card) {
    this.cardItems = items;
    this.cardItemsSubject.next(this.cardItems);
  }
}
