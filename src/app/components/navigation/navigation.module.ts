import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [SharedModule, RouterModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
