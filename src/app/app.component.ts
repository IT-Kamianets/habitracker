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
  newHabit: Habit = { name: '', date: new Date() };
  habits: Habit[] = [];

  addHabit() {
    if (this.newHabit.name && this.newHabit.date) {
      // Додаємо нову звичку до списку
      this.habits.push({ ...this.newHabit });
      // Скидаємо форму
      this.newHabit = { name: '', date: new Date() };
    }
  }

  getDaysSince(date: Date): number {
    const currentDate = new Date();
    const habitDate = new Date(date);
    const timeDifference = currentDate.getTime() - habitDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  }
}
