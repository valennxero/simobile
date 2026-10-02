import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage {
  riwayat: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ionViewWillEnter() {
    this.riwayat = this.transactionService.getAll();
  }
}