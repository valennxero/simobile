import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Transaction, TransactionItem } from '../models/transaction';
import { ProductService } from './product';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [];
  private nextId = 1;

  constructor(private productService: ProductService) {}

  checkout(cartItems: CartItem[]): Transaction {
    const items: TransactionItem[] = cartItems.map((ci) => ({
      productId: ci.product.id,
      productName: ci.product.name,
      qty: ci.qty,
      price: ci.product.sellPrice,
    }));

    const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

    const trx: Transaction = {
      id: this.nextId++,
      date: new Date(),
      items,
      total,
    };

    this.transactions.unshift(trx);

    // Kurangi stok produk sesuai barang yang terjual
    cartItems.forEach((ci) => this.productService.reduceStock(ci.product.id, ci.qty));

    return trx;
  }

  getAll(): Transaction[] {
    return this.transactions;
  }

  getById(id: number): Transaction | undefined {
    return this.transactions.find((t) => t.id === id);
  }

  private isToday(d: Date): boolean {
    const today = new Date();
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  }

  getTodayCount(): number {
    return this.transactions.filter((t) => this.isToday(t.date)).length;
  }

  getTodayTotal(): number {
    return this.transactions
      .filter((t) => this.isToday(t.date))
      .reduce((sum, t) => sum + t.total, 0);
  }

  getBestSellerToday(): string {
    const tally: { [name: string]: number } = {};
    this.transactions
      .filter((t) => this.isToday(t.date))
      .forEach((t) => t.items.forEach((i) => (tally[i.productName] = (tally[i.productName] || 0) + i.qty)));

    const names = Object.keys(tally);
    if (names.length === 0) return '-';

    return names.reduce((best, name) => (tally[name] > tally[best] ? name : best), names[0]);
  }
}
