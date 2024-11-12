import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'habit-tracker'; // Заголовок додатку
  habitInput: string = ''; // Для введення нової звички
  habits: { name: string, startDate: Date }[] = []; // Список звичок та їхніх дат початку

  // Додаємо звичку в список
  addHabit() {
    if (this.habitInput.trim()) {
      const habit = {
        name: this.habitInput.trim(),
        startDate: new Date() // Тепер зберігається дата додавання звички
      };
      this.habits.push(habit);
      this.habitInput = ''; // Очищаємо поле після додавання
    } else {
      alert('Будь ласка, введіть звичку!');
    }
  }

  // Обнуляємо список звичок
  resetHabits() {
    this.habits = [];
  }

  // Рахуємо кількість днів від початку звички
  calculateDaysSince(habitStartDate: Date): number {
    const today = new Date();
    const diffTime = today.getTime() - new Date(habitStartDate).getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24)); // Перетворюємо мілісекунди в дні
    return diffDays;
  }
}
