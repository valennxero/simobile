import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
      },
      {
        path: 'produk',
        loadChildren: () => import('./produk/produk.module').then((m) => m.ProdukPageModule),
      },
      {
        path: 'produk/detail/:id',
        loadChildren: () =>
          import('./produk/produk-detail/produk-detail.module').then((m) => m.ProdukDetailPageModule),
      },
      {
        path: 'produk/form',
        loadChildren: () =>
          import('./produk/produk-form/produk-form.module').then((m) => m.ProdukFormPageModule),
      },
      {
        path: 'produk/form/:id',
        loadChildren: () =>
          import('./produk/produk-form/produk-form.module').then((m) => m.ProdukFormPageModule),
      },
      {
        path: 'keranjang',
        loadChildren: () => import('./keranjang/keranjang.module').then((m) => m.KeranjangPageModule),
      },
      {
        path: 'transaksi',
        loadChildren: () => import('./transaksi/transaksi.module').then((m) => m.TransaksiPageModule),
      },
      {
        path: 'transaksi/detail/:id',
        loadChildren: () =>
          import('./transaksi/transaksi-detail/transaksi-detail.module').then(
            (m) => m.TransaksiDetailPageModule
          ),
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then((m) => m.ProfilPageModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
