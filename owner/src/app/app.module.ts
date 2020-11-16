import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ShopperpageComponent } from './shopperpage/shopperpage.component';
import { CarosuleComponent } from './carosule/carosule.component';
import { DataCardComponent } from './data-card/data-card.component';
import { ProductcradComponent } from './productcrad/productcrad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ShopperpageComponent,
    CarosuleComponent,
    DataCardComponent,
    ProductcradComponent,
    DashboardComponent,
    CartpageComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
