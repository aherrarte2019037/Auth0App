import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';
import { APP_ROUTES } from './app.routes';
import { AuthModule } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PricesComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    APP_ROUTES,
    AuthModule.forRoot({
      domain: 'dev-4fm6mr03.us.auth0.com',
      clientId: 'sM6TyKHT97uNZ1ja7JZZTlslcnvs85E7'
    })
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
