import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { HeadingComponent } from './heading/heading.component';
import { DropdownDirective } from './dropdown.directive';
import { DateTransformPipe } from './date-transform.pipe';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    HeadingComponent,
    DropdownDirective,
    DateTransformPipe,
    ShortenPipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    HeadingComponent,
    DropdownDirective,
    DateTransformPipe,
    ShortenPipe,
  ],
})
export class SharedModule {}
