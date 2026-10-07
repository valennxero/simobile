import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  riwayat: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.riwayat = this.transactionService.getAll();
  }
}