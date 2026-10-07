import { Component, NgZone } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage {
  constructor(
    private transactionService: TransactionService,
    private ngZone: NgZone
  ) {}

  ionViewWillEnter() {
    this.ngZone.run(() => {});
  }

  get riwayat(): Transaction[] {
    return this.transactionService.getAll();
  }
}