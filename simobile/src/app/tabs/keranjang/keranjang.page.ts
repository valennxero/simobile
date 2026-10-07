import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartService } from '../../services/cart';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage {
  constructor(
    public cartService: CartService,
    private transactionService: TransactionService,
    private router: Router,
    private alertController: AlertController
  ) { }

  increase(id: number) {
    this.cartService.increaseQty(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQty(id);
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  async checkout() {
    if (this.cartService.getItems().length === 0) return;

    this.transactionService.checkout(this.cartService.getItems());
    this.cartService.clearCart();

    const alert = await this.alertController.create({
      header: 'Transaksi Berhasil',
      message: 'Transaksi telah disimpan ke riwayat.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/tabs/transaksi']);
          },
        },
      ],
    });

    await alert.present();
  }
}