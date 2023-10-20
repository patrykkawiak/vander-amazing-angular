import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
  declarations: [ShopComponent, ShopItemComponent],
  imports: [SharedModule, RouterModule],
  exports: [ShopComponent, ShopItemComponent],
})
export class ShopModule {}
