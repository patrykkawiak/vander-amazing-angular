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
  isCardOpen: boolean = false;

  private eventSub!: Subscription;
  @Input() events!: Observable<boolean>;
  private cardItemsSub!: Subscription;
  public cardItems!: Card;
  public totalPrice: number = 0;
  public itemAmount: any;
  constructor(private cardService: CardService, private shopService: ShopService) {}

  handleCloseCard() {
    this.isCardOpen = !this.isCardOpen;
  }
  ngOnInit(): void {
    this.eventSub = this.events.subscribe((status) => {
      this.isCardOpen = status;
    });

    this.cardItemsSub = this.cardService.cardItemsSubject.subscribe(
      (card: Card) => {
        this.cardItems = card;
        this.totalPrice = +card.totalPrice.toFixed(2);
      }
    );
  }

  onSelect(e: any, id: number) {
    const value = +e.target.value
    this.cardService.changeAmount(id, value)
    
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
    this.cardItemsSub.unsubscribe();
  }
}
