import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { CardService } from 'src/app/core/Services/card.service';
import { ShopService } from 'src/app/core/Services/shop.service';
import { Card } from 'src/app/core/Types/Card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  public isCardOpen = false;
  private cardItemsSub!: Subscription;
  private cardToggleSub!: Subscription;
  public cardItems!: Card;
  public totalPrice: number = 0;
  public itemAmount: any;
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardToggleSub = this.cardService.cardToggleSubject.subscribe(
      (value) => {
        this.isCardOpen = value;
      }
    );

    this.cardItemsSub = this.cardService.cardItemsSubject.subscribe(
      (card: Card) => {
        this.cardItems = card;
        this.totalPrice = +card.totalPrice.toFixed(2);
      }
    );

    const cardCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('card='))
      ?.split('=')[1];

    if (cardCookie) {
      this.cardItems = JSON.parse(cardCookie!);
      this.cardService.setItems(this.cardItems);
    } else {
      return;
    }
  }

  handleCard() {
    this.cardService.toggleCard();
  }

  onSelect(e: any, id: number) {
    const value = +e.target.value;
    this.cardService.changeAmount(id, value);
  }

  onDelete(id: number) {
    this.cardService.deleteItem(id);
  }

  ngOnDestroy(): void {
    this.cardItemsSub.unsubscribe();
    this.cardToggleSub.unsubscribe();
  }
}
