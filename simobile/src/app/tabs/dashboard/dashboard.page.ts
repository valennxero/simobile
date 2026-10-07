import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit, OnDestroy {
  totalProduk = 0;
  totalTransaksiHariIni = 0;
  omzetHariIni = 0;
  produkTerlaris = '-';
  today = new Date();
  private intervalId: any;

  constructor(private productService: ProductService, private transactionService: TransactionService) {}

  ngOnInit() {
    this.refresh();
    this.intervalId = setInterval(() => this.refresh(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  refresh() {
    this.totalProduk = this.productService.getAll().length;
    this.totalTransaksiHariIni = this.transactionService.getTodayCount();
    this.omzetHariIni = this.transactionService.getTodayTotal();
    this.produkTerlaris = this.transactionService.getBestSellerToday();
  }
}