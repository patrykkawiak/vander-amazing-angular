import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [SharedModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
