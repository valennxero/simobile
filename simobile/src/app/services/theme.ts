import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = false;

  toggleDarkMode(): void {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
  }

  setDarkMode(value: boolean): void {
    this.isDark = value;
    document.body.classList.toggle('dark', this.isDark);
  }
}