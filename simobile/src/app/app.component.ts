import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}
}