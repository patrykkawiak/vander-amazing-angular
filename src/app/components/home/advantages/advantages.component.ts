import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  advantages: { id: string; title: string; desc: string }[] = [
    {
      id: 'a1',
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      id: 'a2',
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      id: 'a3',
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      id: 'a4',
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      id: 'a5',
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
    {
      id: 'a6',
      title: 'Ceny',
      desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
    },
  ];
}
