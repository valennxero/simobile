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

  constructor(private productService: ProductService, private transactionService: TransactionService) {}

  ngOnInit() {
  }

}
