import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  totalProduk = 0;
  totalTransaksiHariIni = 0;
  omzetHariIni = 0;
  produkTerlaris = '-';
  today = new Date();

constructor(private productService: ProductService, private transactionService: TransactionService) {
  console.log('🔵 DASHBOARD COMPONENT DIBUAT (constructor jalan)');
}

ngOnInit() {
  console.log('🟢 DASHBOARD ngOnInit JALAN');
  this.totalProduk = this.productService.getAll().length;
  this.totalTransaksiHariIni = this.transactionService.getTodayCount();
  this.omzetHariIni = this.transactionService.getTodayTotal();
  this.produkTerlaris = this.transactionService.getBestSellerToday();
}
}