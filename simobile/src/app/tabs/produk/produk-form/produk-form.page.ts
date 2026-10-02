import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-produk-form',
  templateUrl: './produk-form.page.html',
  styleUrls: ['./produk-form.page.scss'],
  standalone: false,
})
export class ProdukFormPage implements OnInit {
  // Reactive Form dengan validasi lengkap:
  // - nama wajib diisi
  // - harga (beli & jual) harus angka dan lebih dari 0
  // - stok tidak boleh negatif
  produkForm: FormGroup;
  editId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.produkForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      buyPrice: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(1)]],
      sellPrice: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(1)]],
      stock: [0, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(0)]],
      imageUrl: [''],
    });
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editId = +idParam;
      const produk = this.productService.getById(this.editId);
      if (produk) {
        // Reactive Form otomatis mengisi setiap field yang cocok,
        // sehingga input yang sudah benar tidak perlu diisi ulang.
        this.produkForm.patchValue(produk);
      }
    }
  }

  get f() {
    return this.produkForm.controls;
  }

  get isEdit(): boolean {
    return this.editId !== null;
  }

  submit() {
    if (this.produkForm.invalid) {
      // Tandai semua field agar pesan error muncul, tanpa menghapus isian yang sudah benar
      this.produkForm.markAllAsTouched();
      return;
    }

    const value = this.produkForm.value;
    const data = {
      name: value.name,
      category: value.category,
      buyPrice: Number(value.buyPrice),
      sellPrice: Number(value.sellPrice),
      stock: Number(value.stock),
      imageUrl: value.imageUrl,
    };

    if (this.isEdit && this.editId !== null) {
      this.productService.update(this.editId, data);
    } else {
      this.productService.add(data);
    }

    this.router.navigate(['/tabs/produk']);
  }
}
