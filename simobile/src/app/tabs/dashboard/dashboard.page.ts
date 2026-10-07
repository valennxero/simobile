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

  constructor(
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

  totalProduk(): number {
    return this.productService.getAll().length;
  }

  totalTransaksiHariIni(): number {
    return this.transactionService.getTodayCount();
  }

  omzetHariIni(): number {
    return this.transactionService.getTodayTotal();
  }

  produkTerlaris(): string {
    return this.transactionService.getBestSellerToday();
  }
}