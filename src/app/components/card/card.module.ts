import { NgModule } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [SharedModule, RouterModule],
  exports: [CardComponent],
})
export class CardModule {
}
