import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ProductService } from '../../services/product';
import { TransactionService } from '../../services/transaction';
>>>>>>> Stashed changes

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private productService: ProductService, private transactionService: TransactionService) {}
>>>>>>> Stashed changes

  ngOnInit() {
  }

}
