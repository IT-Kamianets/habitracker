import { Component } from '@angular/core';

interface Habit {
  name: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  habits: Habit[] = [];

  addHabit(name: string, date: string) {
    if (name && date) {
      // Додаємо нову звичку до списку
      this.habits.push({ name, date: new Date(date) });
    }
  }

  getDaysSince(date: Date): number {
    const currentDate = new Date();
    const habitDate = new Date(date);
    const timeDifference = currentDate.getTime() - habitDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  }
}
