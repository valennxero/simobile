import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from './services/theme';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  // dua tombol pada ion-alert konfirmasi logout (contoh pemakaian ion-alert seperti diajarkan di kelas)
  logoutButtons = [
    { text: 'Batal', role: 'cancel' },
    {
      text: 'Ya, Logout',
      role: 'confirm',
      handler: () => {
        // Simulasi logout: kembali ke Dashboard (tidak ada backend/auth pada UTS ini)
        this.router.navigate(['/tabs/dashboard']);
      },
    },
  ];

  constructor(public themeService: Theme, private router: Router) {}
}
