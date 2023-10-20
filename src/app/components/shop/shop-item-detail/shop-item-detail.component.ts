import { Component, OnInit, ViewChild } from '@angular/core';
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
  randomItems: ShopItem[] = [];
  @ViewChild('itemImg') itemImg: any;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.itemId = +params['itemId'];
      this.shopItem = this.shopService.getShopItem(this.itemId);
      this.randomItems = this.shopService.getRandomItems();
    });
  }

  zoomImg(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    const imgX = this.itemImg.nativeElement.offsetLeft;
    const imgY = this.itemImg.nativeElement.offsetTop;

    const finalX = (imgX - x) * -1;
    const finalY = (imgY - y) * -1;

    this.itemImg.nativeElement.style.transformOrigin = `${finalX}px ${finalY}px`;

    console.log(x, y);
  }
}
