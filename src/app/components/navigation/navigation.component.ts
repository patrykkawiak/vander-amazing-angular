import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/core/Services/card.service';
import { Card } from 'src/app/core/Types/Card.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isNavOpen = false;
  cardPrice: number = 0;
  cardPriceSub!: Subscription;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardPriceSub = this.cardService.cardItemsSubject.subscribe(
      (card: Card) => {
        this.cardPrice = +card.totalPrice.toFixed(2);
      }
    );
  }
  handleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  handleCard() {
    this.cardService.toggleCard();
  }
}
