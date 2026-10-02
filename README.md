# SIMOBILE - Aplikasi Kasir Mobile Toko Makmur Jaya

SIMOBILE adalah prototipe aplikasi kasir mobile untuk usaha kelontong **Toko Makmur Jaya** milik Bu Marni. Aplikasi ini membantu mencatat produk, keranjang, dan transaksi penjualan langsung dari HP, tanpa server atau koneksi internet. Seluruh data disimpan di dalam aplikasi (in-memory), sesuai ketentuan UTS.

Dibuat untuk **UTS Hybrid Mobile Programming (Gasal 2026/27)** menggunakan **Ionic Angular**.

## Anggota Kelompok

**Kelompok The Dark Side of The Moon**

| Nama | NRP |
|---|---|
| Jevon Valentino | 160424066 |
| Valens Oliver | 160424091 |
| Nicholas Davian | 160424070 |
| Matthew Lenky | 160424055 |

## Teknologi

- Ionic 9 (Ionic Angular)
- Angular 22 (berbasis NgModule, tanpa `zone.js`)
- TypeScript, SCSS

## Cara Instalasi

### Prasyarat

- [Node.js](https://nodejs.org/) versi **22.22.3 atau lebih baru** (Angular CLI 22 menolak versi di bawahnya). Versi 24.15.0 atau 26.0.0 ke atas juga bisa.
- npm (sudah terpasang bersama Node.js)
- Git
- Ionic CLI. Jika belum terpasang, jalankan:

  ```bash
  npm install -g @ionic/cli
  ```

### Langkah-langkah

1. Clone repository ini:

   ```bash
   git clone https://github.com/valennxero/simobile.git
   ```

2. Masuk ke folder aplikasi. Di dalam repository terdapat folder `simobile` yang berisi proyek Ionic:

   ```bash
   cd simobile/simobile
   ```

3. Pasang seluruh dependensi (cukup sekali, saat pertama kali):

   ```bash
   npm install
   ```

## Cara Menjalankan Aplikasi

1. Pastikan terminal berada di folder `simobile/simobile` (folder yang berisi `package.json` dan `angular.json` aplikasi).
2. Jalankan:

   ```bash
   ionic serve
   ```

3. Buka alamat yang tampil di terminal, biasanya **http://localhost:8100**, di browser.
4. Untuk tampilan seperti di HP, buka DevTools browser (F12) lalu aktifkan mode perangkat (device toolbar).

> **Catatan:** data produk, keranjang, dan riwayat transaksi disimpan di memori aplikasi. Jika halaman di-refresh atau `ionic serve` memuat ulang karena ada perubahan kode, data kembali ke kondisi awal (12 produk dummy). Hal ini sesuai ketentuan UTS, karena penyimpanan permanen dikerjakan pada UAS.

## Daftar Fitur yang Berhasil Diimplementasikan

### 1. Struktur Navigasi
- Navigasi utama berbentuk **4 tab**: Dashboard, Produk, Transaksi, dan Profil.
- **Side menu (drawer)** berisi Dashboard, Pengaturan, Tentang Aplikasi, dan Logout.
- Logout menampilkan dialog konfirmasi. Logout bersifat simulasi dan mengembalikan pengguna ke Dashboard, karena belum ada autentikasi pada UTS ini.

### 2. Dashboard
Ringkasan hari ini yang dihitung oleh service dan ditampilkan dengan **interpolation binding**:
- Jumlah produk
- Total transaksi hari ini
- Omzet hari ini
- Produk terlaris hari ini

### 3. Pencarian Produk Real-Time
- Daftar produk langsung terfilter berdasarkan nama saat pengguna mengetik, tanpa tombol submit (**two-way binding dengan `ngModel`**).
- Jika tidak ada hasil, tampil pesan produk tidak ditemukan.

### 4. Detail Produk via Route Parameter
- Klik produk membuka halaman detail berdasarkan ID di URL (`/tabs/produk/detail/:id`).
- Menampilkan stok sisa, harga beli, harga jual, dan estimasi untung per item.

### 5. Property Binding dan Event Binding
- Produk tanpa gambar menampilkan **gambar default** (`[src]`).
- Tombol "tambah ke keranjang" otomatis **disabled** saat stok 0 (`[disabled]`).
- Aksi klik tambah ke keranjang ditangani dengan **event binding** (`(click)`).
- Ikon keranjang menampilkan badge jumlah item.

### 6. Form Tambah dan Edit Produk (Reactive Form)
- Menggunakan **Reactive Form** (`FormBuilder`, `FormGroup`, `Validators`) untuk tambah dan edit produk.
- Validasi:
  - Nama produk dan kategori wajib diisi
  - Harga beli dan harga jual harus berupa angka lebih dari 0
  - Stok tidak boleh negatif
- Pesan error tampil di setiap field yang salah. Isian yang sudah benar tidak hilang.
- Mode edit mengisi form otomatis dari data produk (`/tabs/produk/form/:id`).

### 7. Angular Service
Logic data dipisahkan dari komponen ke 4 service:
- `ProductService`: data produk, pencarian, tambah, ubah, dan pengurangan stok
- `CartService`: isi keranjang, jumlah item, dan total belanja
- `TransactionService`: checkout, riwayat transaksi, dan ringkasan harian
- `ThemeService`: pengaturan mode gelap/terang

### 8. Custom Theme dan Dark Mode
- Palet warna **hijau-kuning** sesuai identitas toko (`src/theme/variables.scss`).
- **Toggle mode gelap/terang** di halaman Pengaturan.

### 9. Animasi
- **Swipe-to-delete** pada item keranjang menggunakan `ion-item-sliding`.

### 10. Keranjang dan Checkout (Simulasi)
- Ubah jumlah item dengan tombol tambah dan kurang, atau geser item untuk menghapus.
- Total belanja dihitung otomatis.
- Tombol **Konfirmasi Transaksi** menyimpan transaksi ke riwayat, mengurangi stok produk, dan mengosongkan keranjang.

### 11. Riwayat Transaksi
- Daftar semua transaksi yang pernah dilakukan.
- Setiap transaksi bisa diklik untuk melihat detail lengkap (`/tabs/transaksi/detail/:id`).

### Fitur Pendukung
- **12 data dummy produk** dengan variasi harga, stok (termasuk stok 0), dan kategori.
- Halaman **Profil** (pemilik dan nama toko), **Pengaturan**, dan **Tentang Aplikasi**.

## Struktur Folder Utama

```
simobile/                      <- root repository
└── simobile/                  <- proyek Ionic (jalankan perintah di sini)
    └── src/
        ├── app/
        │   ├── models/        <- Product, CartItem, Transaction
        │   ├── services/      <- product, cart, transaction, theme
        │   ├── tabs/          <- dashboard, produk, keranjang, transaksi, profil
        │   ├── pengaturan/    <- halaman pengaturan (toggle mode gelap)
        │   └── tentang/       <- halaman tentang aplikasi
        └── theme/variables.scss   <- palet warna dan dark mode
```
