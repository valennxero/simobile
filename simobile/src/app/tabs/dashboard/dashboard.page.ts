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
    private transactionService: TransactionService,
  ) {}

ionViewWillEnter() {
    this.totalTransaksiHariIni = this.transactionService.getTodayCount();
      this.omzetHariIni = this.transactionService.getTodayTotal();
      this.produkTerlaris = this.transactionService.getBestSellerToday();
  }

  get totalProduk(): number {
    return this.productService.getAll().length;
  }
}