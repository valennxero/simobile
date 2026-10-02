import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.page.html',
  styleUrls: ['./produk-detail.page.scss'],
  standalone: false,
})
export class ProdukDetailPage implements OnInit {
  defaultImage = 'https://ubaya.cloud/no_image.jpg';
  produk?: Product;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.produk = this.productService.getById(this.id);
    });
  }

  get untung(): number {
    return this.produk ? this.produk.sellPrice - this.produk.buyPrice : 0;
  }

  addToCart() {
    if (this.produk && this.produk.stock > 0) {
      this.cartService.addToCart(this.produk);
    }
  }
}
