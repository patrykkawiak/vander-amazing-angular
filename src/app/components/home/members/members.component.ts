import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  members: {
    name: string;
    vacancy: string;
    desc: string;
    img: string;
  }[] = [
    {
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: 'assets/images/Team/member.jpg',
    },
    {
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: 'assets/images/Team/member.jpg',
    },
    {
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: 'assets/images/Team/member.jpg',
    },
    {
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: 'assets/images/Team/member.jpg',
    },
  ];
}
