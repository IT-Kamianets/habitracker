import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'habit-tracker'; // Заголовок додатку
  habitInput: string = ''; // Для збереження введеної звички
  habits: string[] = [];   // Массив для збереження звичок

  // Додаємо звичку в список
  addHabit() {
    if (this.habitInput.trim()) {
      this.habits.push(this.habitInput.trim());
      this.habitInput = ''; // Очищаємо поле введення після додавання
    } else {
      alert('Будь ласка, введіть звичку!');
    }
  }

  // Обнуляємо список звичок
  resetHabits() {
    this.habits = [];
  }
}



