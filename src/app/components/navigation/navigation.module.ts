import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [SharedModule, RouterModule, CardModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
