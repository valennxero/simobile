import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule } from '@ionic/angular/lazy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoCacheRouteReuseStrategy } from './no-cache-route-reuse-strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: NoCacheRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}