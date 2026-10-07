import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage {
  defaultImage = '';
  keyword = '';
  justBumped = false;

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ionViewWillEnter() {
    this.ngZone.run(() => {});
  }

  get produkList(): Product[] {
    return this.productService.search(this.keyword);
  }

  goDetail(id: number) {
    this.router.navigate(['/tabs/produk/detail', id]);
  }

  addToCart(product: Product, ev: Event) {
    ev.stopPropagation();
    if (product.stock <= 0) return;
    this.cartService.addToCart(product);
    this.justBumped = true;
    setTimeout(() => (this.justBumped = false), 350);
  }
}