import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopItemDetailComponent } from './shop-item-detail/shop-item-detail.component';

@NgModule({
  declarations: [ShopComponent, ShopItemComponent, ShopItemDetailComponent],
  imports: [SharedModule, RouterModule],
  exports: [ShopComponent, ShopItemComponent, ShopItemDetailComponent],
})
export class ShopModule {}
