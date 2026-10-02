import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  // Nilai-nilai berikut dihitung oleh service lalu ditampilkan dengan interpolation binding di HTML
  totalProduk = 0;
  totalTransaksiHariIni = 0;
  omzetHariIni = 0;
  produkTerlaris = '-';
  today = new Date();

<<<<<<< Updated upstream
  constructor(private productService: ProductService, private transactionService: TransactionService) {}

  ngOnInit() {
    this.refresh();
  }

  ionViewWillEnter() {
    this.refresh();
  }

  refresh() {
    this.totalProduk = this.productService.getAll().length;
    this.totalTransaksiHariIni = this.transactionService.getTodayCount();
    this.omzetHariIni = this.transactionService.getTodayTotal();
    this.produkTerlaris = this.transactionService.getBestSellerToday();
  }
}
=======
namaToko: string = 'Toko Makmur Jaya';

  barangList = [
    { id: 1,  nama: 'Minyak Goreng 1L',   harga: 18000, hargaBeli: 15000, stok: 20, kategori: 'Sembako',    gambar: '', terjual: 12 },
    { id: 2,  nama: 'Gula Pasir 1kg',     harga: 15000, hargaBeli: 12000, stok: 0,  kategori: 'Sembako',    gambar: '', terjual: 8  },
    { id: 3,  nama: 'Beras 5kg',          harga: 65000, hargaBeli: 58000, stok: 8,  kategori: 'Sembako',    gambar: '', terjual: 4  },
    { id: 4,  nama: 'Kopi Sachet',        harga: 2000,  hargaBeli: 1500,  stok: 50, kategori: 'Minuman',    gambar: '', terjual: 30 },
    { id: 5,  nama: 'Teh Celup Kotak',    harga: 8000,  hargaBeli: 6000,  stok: 25, kategori: 'Minuman',    gambar: '', terjual: 10 },
    { id: 6,  nama: 'Air Mineral 600ml',  harga: 4000,  hargaBeli: 3000,  stok: 0,  kategori: 'Minuman',    gambar: '', terjual: 22 },
    { id: 7,  nama: 'Sabun Mandi Batang', harga: 5000,  hargaBeli: 3500,  stok: 15, kategori: 'Kebersihan', gambar: '', terjual: 6  },
    { id: 8,  nama: 'Sikat Gigi',         harga: 6000,  hargaBeli: 4000,  stok: 30, kategori: 'Kebersihan', gambar: '', terjual: 3  },
    { id: 9,  nama: 'Deterjen Bubuk 1kg', harga: 22000, hargaBeli: 18000, stok: 5,  kategori: 'Kebersihan', gambar: '', terjual: 2  },
    { id: 10, nama: 'Rokok Kretek 1 Pak', harga: 25000, hargaBeli: 21000, stok: 40, kategori: 'Rokok',      gambar: '', terjual: 18 },
    { id: 11, nama: 'Korek Api Gas',      harga: 3000,  hargaBeli: 2000,  stok: 0,  kategori: 'Lainnya',    gambar: '', terjual: 5  },
    { id: 12, nama: 'Baterai AA 2pcs',    harga: 7000,  hargaBeli: 5000,  stok: 18, kategori: 'Lainnya',    gambar: '', terjual: 7  },
  ];

  totalTerjualHariIni: number = 0;
  totalTransaksiHariIni: number = 15;
  barangTerlaris: any = null;

  constructor() { }

  ngOnInit() {
     this.totalTerjualHariIni = this.barangList.reduce((total, b) => total + b.terjual, 0);
    this.barangTerlaris = this.barangList.reduce((prev, curr) =>
      curr.terjual > prev.terjual ? curr : prev
    , this.barangList[0]);
  }
}
>>>>>>> Stashed changes
