import { Component, NgZone } from '@angular/core';
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
    private transactionService: TransactionService,
    private ngZone: NgZone
  ) {}

  ionViewWillEnter() {
    this.ngZone.run(() => {});
  }

  get totalProduk(): number {
    return this.productService.getAll().length;
  }

  get totalTransaksiHariIni(): number {
    return this.transactionService.getTodayCount();
  }

  get omzetHariIni(): number {
    return this.transactionService.getTodayTotal();
  }

  get produkTerlaris(): string {
    return this.transactionService.getBestSellerToday();
  }
}