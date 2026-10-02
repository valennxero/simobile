import { Component, OnInit } from '@angular/core';
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
export class ProdukPage implements OnInit {
  // Gambar default untuk produk yang belum difoto (property binding, tidak boleh error)
  defaultImage = 'https://ubaya.cloud/no_image.jpg';

  keyword = '';
  produkList: Product[] = [];
  justBumped = false;

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.produkList = this.productService.getAll();
  }

  ionViewWillEnter() {
    // refresh setiap kembali ke halaman ini (mis. setelah menambah/edit produk)
    this.onSearch();
  }

  // Pencarian real-time: two-way binding (ngModel) di HTML, tanpa tombol submit
  onSearch() {
    this.produkList = this.productService.search(this.keyword);
  }

  // Navigasi ke detail produk (dipanggil dari thumbnail/label, bukan dari ion-item langsung)
  goDetail(id: number) {
    this.router.navigate(['/tabs/produk/detail', id]);
  }

  addToCart(product: Product, ev: Event) {
    ev.stopPropagation();
    if (product.stock <= 0) return;
    this.cartService.addToCart(product);

    // animasi kecil saat item masuk keranjang (bump pada ikon keranjang)
    this.justBumped = true;
    setTimeout(() => (this.justBumped = false), 350);
  }
}