import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  habitName: string = '';   // Змінна для назви звички
  habitDate: string = '';   // Змінна для дати звички
  habits: { name: string, date: string, days: number }[] = [];  // Масив для збереження звичок

  // Обробник зміни назви звички
  onHabitNameChange(event: Event) {
    this.habitName = (event.target as HTMLInputElement).value;
    console.log("habitName:", this.habitName);  // Виведення для перевірки
  }

  // Обробник зміни дати
  onHabitDateChange(event: Event) {
    this.habitDate = (event.target as HTMLInputElement).value;
    console.log("habitDate:", this.habitDate);  // Виведення для перевірки
  }

  // Функція для додавання звички
  addHabit() {
    console.log("Додаємо звичку:", this.habitName, this.habitDate);  // Виведення перед додаванням
    // Перевірка, чи є назва та дата
    if (this.habitName && this.habitDate) {
      const daysPassed = this.calculateDays(this.habitDate);
      this.habits.push({
        name: this.habitName,
        date: this.habitDate,
        days: daysPassed
      });
      console.log("Звичка додана", this.habits);  // Виведення після додавання

      // Очистка полів після додавання
      this.habitName = '';
      this.habitDate = '';
    } else {
      alert("Будь ласка, заповніть обидва поля!"); // Якщо поля не заповнені
    }
  }

  // Функція для обчислення кількості днів
  calculateDays(date: string): number {
    const habitDate = new Date(date);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - habitDate.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));  // Переводимо мілісекунди в дні
  }
}
