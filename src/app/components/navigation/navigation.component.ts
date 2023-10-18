import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isNavOpen = false;

  handleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
