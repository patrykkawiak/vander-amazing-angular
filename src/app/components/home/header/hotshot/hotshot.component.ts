import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotshot',
  templateUrl: './hotshot.component.html',
  styleUrls: ['./hotshot.component.scss'],
})
export class HotshotComponent implements OnInit {
  seconds = 5;
  minutes = 31;
  hours = 20;
  constructor() {
    let timerInterval = setInterval(() => {
      this.seconds--;

      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
      }
      if (this.minutes < 0) {
        this.hours--;
        this.minutes = 59;
      }
      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        clearInterval(timerInterval);
      }
      this.setToLocalStorage(this.seconds, this.minutes, this.hours);
    }, 1000);
  }

  setToLocalStorage(seconds: number, minutes: number, hours: number) {
    localStorage.setItem(
      'timer',
      JSON.stringify({
        seconds,
        minutes,
        hours,
      })
    );
  }
  getFromLocalStorage() {
    const timer: any = localStorage.getItem('timer');
    const convertedTimer = JSON.parse(timer);
    return convertedTimer;
  }
  ngOnInit(): void {
    this.seconds = this.getFromLocalStorage().seconds;
    this.minutes = this.getFromLocalStorage().minutes;
    this.hours = this.getFromLocalStorage().hours;
  }
}
