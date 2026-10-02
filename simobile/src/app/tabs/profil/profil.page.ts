import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage {
  pemilik = 'Bu Marni';
  namaToko = 'Toko Makmur Jaya';
}