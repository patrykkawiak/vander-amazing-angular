import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { HeadingComponent } from './heading/heading.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [ButtonComponent, HeadingComponent, DropdownDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    HeadingComponent,
    DropdownDirective,
  ],
})
export class SharedModule {}
