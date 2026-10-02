import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction';

@Component({
  selector: 'app-transaksi-detail',
  templateUrl: './transaksi-detail.page.html',
  styleUrls: ['./transaksi-detail.page.scss'],
  standalone: false,
})
export class TransaksiDetailPage implements OnInit {
  trx?: Transaction;

  constructor(private route: ActivatedRoute, private transactionService: TransactionService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.trx = this.transactionService.getById(id);
    });
  }
}
