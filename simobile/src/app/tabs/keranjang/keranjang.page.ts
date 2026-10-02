import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage {
  showSuccess = false;

  constructor(
    public cartService: CartService,
    private transactionService: TransactionService,
    private router: Router
  ) {}

  increase(id: number) {
    this.cartService.increaseQty(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQty(id);
  }

  // dipanggil dari ion-item-sliding (animasi swipe-to-delete)
  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  checkout() {
    if (this.cartService.getItems().length === 0) return;
    this.transactionService.checkout(this.cartService.getItems());
    this.cartService.clearCart();
    this.showSuccess = true;
  }

  goToRiwayat() {
    this.showSuccess = false;
    this.router.navigate(['/tabs/transaksi']);
  }
}
