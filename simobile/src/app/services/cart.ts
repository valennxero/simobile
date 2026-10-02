import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }

  getItemCount(): number {
    return this.items.reduce((sum, it) => sum + it.qty, 0);
  }

  addToCart(product: Product): void {
    if (product.stock <= 0) return;
    const existing = this.items.find((it) => it.product.id === product.id);
    if (existing) {
      if (existing.qty < product.stock) existing.qty++;
    } else {
      this.items.push({ product, qty: 1 });
    }
  }

  increaseQty(productId: number): void {
    const it = this.items.find((i) => i.product.id === productId);
    if (it && it.qty < it.product.stock) it.qty++;
  }

  decreaseQty(productId: number): void {
    const it = this.items.find((i) => i.product.id === productId);
    if (it) {
      it.qty--;
      if (it.qty <= 0) this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter((i) => i.product.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((sum, it) => sum + it.qty * it.product.sellPrice, 0);
  }

  clearCart(): void {
    this.items = [];
  }
}
