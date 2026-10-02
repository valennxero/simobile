import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Minimal 10 data dummy produk dengan variasi harga, stok, dan kategori
  private products: Product[] = [
    { id: 1, name: 'Beras Ramos 5kg', category: 'Sembako', buyPrice: 58000, sellPrice: 65000, stock: 24, imageUrl: 'https://coreimages.lottemart.co.id/ord/06/1083641000' },
    { id: 2, name: 'Minyak Goreng Bimoli 1L', category: 'Sembako', buyPrice: 16000, sellPrice: 19000, stock: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_rwMeXQsrTyPGpXaC4izD5auYX6cHpQBvqD1UgRxSOvlHltK1KqBCSg&s=10' },
    { id: 3, name: 'Gula Pasir 1kg', category: 'Sembako', buyPrice: 13500, sellPrice: 15500, stock: 0, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTebY1deskVCE-oO9hh9B2JrgWyvySpwvaMTzKuz8lnp_yBIWluvEzE8F&s=10' },
    { id: 4, name: 'Indomie Goreng', category: 'Mie Instan', buyPrice: 2800, sellPrice: 3500, stock: 120, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54mpAlt--FDipHpI74AJh0Xk60ZvsghW-8Beidp0UTg&s=10' },
    { id: 5, name: 'Teh Celup Sariwangi', category: 'Minuman', buyPrice: 8500, sellPrice: 10500, stock: 18, imageUrl: 'https://down-id.img.susercontent.com/file/7e91715aa1786fb84a075bf6653b1785' },
    { id: 6, name: 'Kopi Kapal Api Sachet', category: 'Minuman', buyPrice: 1000, sellPrice: 1500, stock: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwbhz4rqrfbMh2Qj_DfbeHiwJ2i0gok9dgs56LMWh_A&s=10' },
    { id: 7, name: 'Sabun Mandi Lifebuoy', category: 'Kebutuhan Mandi', buyPrice: 3200, sellPrice: 4000, stock: 0, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgFVmwe_UAQA8MqHnNDCcPv3YJ5ZTMb8d6kYPaVrXOw&s=10' },
    { id: 8, name: 'Sampo Sachet Clear', category: 'Kebutuhan Mandi', buyPrice: 900, sellPrice: 1200, stock: 150, imageUrl: 'https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/2/12/02d46c23-70a4-42a4-aea5-23d64b41c22b.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg' },
    { id: 9, name: 'Telur Ayam 1kg', category: 'Sembako', buyPrice: 26000, sellPrice: 29000, stock: 15, imageUrl: 'https://img.lazcdn.com/g/p/9792ae8a7137efcac0eaf993bf1d320d.jpg_720x720q80.jpg' },
    { id: 10, name: 'Rokok Sampoerna Mild', category: 'Rokok', buyPrice: 27000, sellPrice: 30000, stock: 40, imageUrl: 'https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1089165000-a&w=1920&q=75' },
    { id: 11, name: 'Air Mineral Botol 600ml', category: 'Minuman', buyPrice: 2500, sellPrice: 3500, stock: 60, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FcnjIeACiNysswZDlfApmt2rTBePKNqmiA46aHtQ6g&s=10' },
    { id: 12, name: 'Deterjen Bubuk 800g', category: 'Kebutuhan Rumah', buyPrice: 12000, sellPrice: 14500, stock: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4W0Le_gkKMSrbo_dgXhMZFGdoCSGRDYWLZe-ESwSna9Ay9YOL91gnb7f&s=10' },
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
