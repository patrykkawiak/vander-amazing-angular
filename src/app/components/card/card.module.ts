import { NgModule } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [SharedModule, ],
  exports: [CardComponent],
})
export class CardModule {
}
