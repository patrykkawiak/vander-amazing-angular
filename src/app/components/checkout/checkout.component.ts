import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/core/Services/card.service';
import { Card } from 'src/app/core/Types/Card.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cardSub!: Subscription;
  cardItems!: Card;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardItems = this.cardService.getItems();
    console.log(this.cardItems);

    this.cardService.toggleCard();
  }
}
 