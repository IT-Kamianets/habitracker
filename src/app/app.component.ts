import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'habittracker';
}
@Component({
  selector: 'app-habit-tracker',
  templateUrl: './habit-tracker.component.html',
  styleUrls: ['./habit-tracker.component.scss']
})
export class HabitTrackerComponent {
  habitInput: string = ''; // Змінна для введення нової звички
  habits: string[] = [];   // Массив для збереження звичок

  // Додаємо звичку в список
  addHabit() {
    if (this.habitInput.trim()) {
      this.habits.push(this.habitInput.trim());
      this.habitInput = ''; // Очищаємо поле після додавання
    } else {
      alert('Будь ласка, введіть звичку!');
    }
  }

  // Обнуляємо список звичок
  resetHabits() {
    this.habits = [];
  }
}