import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { ViewProductComponent } from './seller/view-product/view-product.component';
import { EditProductComponent } from './seller/edit-product/edit-product.component';
import { CartComponent } from './buyer/cart/cart.component';
import { ShopScreenComponent } from './buyer/shop-screen/shop-screen.component';
import { DataService } from './service/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ProductViewComponent,
    BuyerComponent,
    SellerComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,
    CartComponent,
    ShopScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
