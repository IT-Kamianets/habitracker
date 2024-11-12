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
  }

  // Обробник зміни дати
  onHabitDateChange(event: Event) {
    this.habitDate = (event.target as HTMLInputElement).value;
  }

  // Функція для додавання звички
  addHabit() {
    // Перевіряємо, чи є значення в полях
    if (this.habitName && this.habitDate) {
      // Рахуємо кількість днів від початку звички
      const daysPassed = this.calculateDays(this.habitDate);
      this.habits.push({
        name: this.habitName,
        date: this.habitDate,
        days: daysPassed
      });
      this.habitName = '';   // Очистка поля для назви
      this.habitDate = '';   // Очистка поля для дати
    } else {
      alert("Будь ласка, заповніть обидва поля!"); // Якщо поля не заповнені
    }
  }

  // Функція для обчислення кількості днів без звички
  calculateDays(date: string): number {
    const habitDate = new Date(date);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - habitDate.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));  // Переводимо мілісекунди в дні
  }

  // Функція для форматування дати вручну
  formatDate(date: string): string {
    const habitDate = new Date(date);
    const day = habitDate.getDate();
    const month = habitDate.getMonth() + 1;  // Місяці від 0 до 11, тому додаємо 1
    const year = habitDate.getFullYear();
    const hours = habitDate.getHours();
    const minutes = habitDate.getMinutes();
    const seconds = habitDate.getSeconds();

    // Форматуємо дату в формат "ДД.ММ.РРРР, ЧЧ:ММ:СС"
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}
