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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // імпортуємо FormsModule

import { AppComponent } from './app.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // додаємо FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

{}