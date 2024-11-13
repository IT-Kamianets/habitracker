import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  habits: { name: string, date: string }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  addHabit(habitName: string, habitDate: string) {
    if (habitName && habitDate) {
      this.habits.push({
        name: habitName,
        date: habitDate
      });
      console.log('Habit added:', this.habits);
      this.cdr.detectChanges(); // Trigger change detection
    }
  }

  calculateDays(date: string): number {
    const habitDate = new Date(date);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - habitDate.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));
  }
}