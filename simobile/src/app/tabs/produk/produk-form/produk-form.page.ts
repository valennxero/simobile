import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produk-form',
  templateUrl: './produk-form.page.html',
  styleUrls: ['./produk-form.page.scss'],
  standalone: false,
})

export class ProdukFormPage {
  produkForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    this.produkForm = this.formBuilder.group({
      nama: ['', Validators.required],
      harga: [null, [Validators.required, Validators.min(0)]],
      stok: [null, [Validators.required, Validators.min(0)]],
      deskripsi: ['']
    });
  }

  async simpanProduk() {
    if (this.produkForm.invalid) {
      this.produkForm.markAllAsTouched();

      const alert = await this.alertController.create({
        header: 'Form belum lengkap',
        message: 'Mohon isi nama, harga, dan stok dengan benar.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const produk = this.produkForm.value;

    const alert = await this.alertController.create({
      header: 'Data Produk',
      message: `Nama: ${produk.nama}<br>
                Harga: Rp${Number(produk.harga).toLocaleString('id-ID')}<br>
                Stok: ${produk.stok}`,
      buttons: ['OK']
    });

    await alert.present();

    console.log('Data produk:', produk);
    this.produkForm.reset();
  }
}
