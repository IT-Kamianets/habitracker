import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component'; // Імпортуємо компонент HabitTracker
import { FormsModule } from '@angular/forms'; // Імпортуємо FormsModule для ngModel

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    // Конфігурація тестового модуля
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HabitTrackerComponent, // Додаємо компонент HabitTracker до тесту
      ],
      imports: [
        FormsModule, // Необхідно для використання ngModel у тестах
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Відновлюємо змінений шаблон
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the habit tracker component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Перевіряємо, що компонент HabitTracker відображається в шаблоні AppComponent
    expect(compiled.querySelector('app-habit-tracker')).toBeTruthy();
  });

  // Тест для перевірки правильності взаємодії з шаблоном
  it('should have the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Habit Tracker');
  });
});

