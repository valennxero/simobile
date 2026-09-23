import { Component } from '@angular/core';
import { Theme } from '../services/theme';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage {
  constructor(public themeService: Theme) {}

  onToggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}