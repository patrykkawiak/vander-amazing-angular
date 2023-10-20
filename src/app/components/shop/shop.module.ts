import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [SharedModule, RouterModule],
  exports: [ShopComponent],
})
export class ShopModule {}
