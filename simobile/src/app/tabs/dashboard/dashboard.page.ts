import { Component } from '@angular/core';
import { ProductService } from '../../services/product';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage {
  today = new Date();

  totalTransaksiHariIni = 0;
  omzetHariIni = 0;
  produkTerlaris = '';

  constructor(
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

ionViewWillEnter() {
  console.log('DASHBOARD ionViewWillEnter dipanggil');

  this.totalTransaksiHariIni =
    this.transactionService.getTodayCount();

  this.omzetHariIni =
    this.transactionService.getTodayTotal();

  this.produkTerlaris =
    this.transactionService.getBestSellerToday();

  console.log('Total transaksi:', this.totalTransaksiHariIni);
  console.log('Omzet:', this.omzetHariIni);
  console.log('Produk terlaris:', this.produkTerlaris);
}

  get totalProduk(): number {
    return this.productService.getAll().length;
  }
}