import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  logoutButtons = [
    { text: 'Batal', role: 'cancel' },
    {
      text: 'Ya, Logout',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/tabs/dashboard']);
      },
    },
  ];

  constructor(public themeService: ThemeService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('🚀 NAVIGATION START ke:', event.url);
      }
      if (event instanceof NavigationEnd) {
        console.log('✅ NAVIGATION END di:', event.urlAfterRedirects);
      }
    });
  }
}