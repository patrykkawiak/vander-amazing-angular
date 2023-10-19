import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.dropdown-open') isDropDownOpen = false;

  @HostListener('mouseenter') handleOpenDropdown() {
    this.isDropDownOpen = true;
  }
  @HostListener('mouseleave') handleCloseDropdown() {
    this.isDropDownOpen = false;
  }
}
