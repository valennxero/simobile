import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then((m) => m.PengaturanPageModule),
  },
  {
    path: 'tentang',
    loadChildren: () => import('./tentang/tentang.module').then((m) => m.TentangPageModule),
  },
  {
    path: 'laporan',
    loadChildren: () => import('./laporan/laporan.module').then( m => m.LaporanPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}