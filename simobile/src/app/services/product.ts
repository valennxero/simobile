import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Minimal 10 data dummy produk dengan variasi harga, stok, dan kategori
  private products: Product[] = [
    { id: 1, name: 'Beras Ramos 5kg', category: 'Sembako', buyPrice: 58000, sellPrice: 65000, stock: 24, imageUrl: '' },
    { id: 2, name: 'Minyak Goreng Bimoli 1L', category: 'Sembako', buyPrice: 16000, sellPrice: 19000, stock: 30, imageUrl: '' },
    { id: 3, name: 'Gula Pasir 1kg', category: 'Sembako', buyPrice: 13500, sellPrice: 15500, stock: 0, imageUrl: '' },
    { id: 4, name: 'Indomie Goreng', category: 'Mie Instan', buyPrice: 2800, sellPrice: 3500, stock: 120, imageUrl: '' },
    { id: 5, name: 'Teh Celup Sariwangi', category: 'Minuman', buyPrice: 8500, sellPrice: 10500, stock: 18, imageUrl: '' },
    { id: 6, name: 'Kopi Kapal Api Sachet', category: 'Minuman', buyPrice: 1000, sellPrice: 1500, stock: 200, imageUrl: '' },
    { id: 7, name: 'Sabun Mandi Lifebuoy', category: 'Kebutuhan Mandi', buyPrice: 3200, sellPrice: 4000, stock: 0, imageUrl: '' },
    { id: 8, name: 'Sampo Sachet Clear', category: 'Kebutuhan Mandi', buyPrice: 900, sellPrice: 1200, stock: 150, imageUrl: '' },
    { id: 9, name: 'Telur Ayam 1kg', category: 'Sembako', buyPrice: 26000, sellPrice: 29000, stock: 15, imageUrl: '' },
    { id: 10, name: 'Rokok Sampoerna Mild', category: 'Rokok', buyPrice: 27000, sellPrice: 30000, stock: 40, imageUrl: '' },
    { id: 11, name: 'Air Mineral Botol 600ml', category: 'Minuman', buyPrice: 2500, sellPrice: 3500, stock: 60, imageUrl: '' },
    { id: 12, name: 'Deterjen Bubuk 800g', category: 'Kebutuhan Rumah', buyPrice: 12000, sellPrice: 14500, stock: 5, imageUrl: '' },
  ];

  private nextId = 13;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  search(keyword: string): Product[] {
    const k = keyword.trim().toLowerCase();
    if (!k) return this.products;
    return this.products.filter((p) => p.name.toLowerCase().includes(k));
  }

  add(data: Omit<Product, 'id'>): Product {
    const product: Product = { id: this.nextId++, ...data };
    this.products.push(product);
    return product;
  }

  update(id: number, data: Omit<Product, 'id'>): void {
    const idx = this.products.findIndex((p) => p.id === id);
    if (idx > -1) {
      this.products[idx] = { id, ...data };
    }
  }

  reduceStock(id: number, qty: number): void {
    const product = this.getById(id);
    if (product) {
      product.stock = Math.max(0, product.stock - qty);
    }
  }
}
