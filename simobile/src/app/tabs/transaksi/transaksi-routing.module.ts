import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaksiPage } from './transaksi.page';

const routes: Routes = [
  {
    path: '',
    component: TransaksiPage
  },  {
    path: 'transaksi-detail',
    loadChildren: () => import('./transaksi-detail/transaksi-detail.module').then( m => m.TransaksiDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiPageRoutingModule {}
