import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  advantages: { title: string; desc: string }[] = [
    {
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
  ];
}
