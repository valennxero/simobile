import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
  standalone: false,
})
export class LaporanPage implements OnInit {
  today = new Date();

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // Memastikan data segar setiap kali halaman dibuka
  }

  get totalTransaksi(): number {
    return this.transactionService.getTodayCount();
  }

  get totalOmzet(): number {
    return this.transactionService.getTodayTotal();
  }

  get produkTerlaris(): string {
    return this.transactionService.getBestSellerToday();
  }
}