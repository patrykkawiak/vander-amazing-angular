import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  members: {
    id: string;
    name: string;
    vacancy: string;
    desc: string;
    img: string;
  }[] = [
    {
      id: 'm1',
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: '../../../../assets/images/Team/member.jpg',
    },
    {
      id: 'm2',
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: '../../../../assets/images/Team/member.jpg',
    },
    {
      id: 'm3',
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: '../../../../assets/images/Team/member.jpg',
    },
    {
      id: 'm4',
      name: 'Mario Rogerson',
      vacancy: 'game tester',
      desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
      img: '../../../../assets/images/Team/member.jpg',
    },
  ];
}
