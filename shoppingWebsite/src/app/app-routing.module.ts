import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'Signup', component: SignupPageComponent},
  { path: 'Login', component: LoginPageComponent},
  { path: 'home', component: HomeComponent},
  { path: 'seller', component: SellerComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: 'seller/addProduct', component: AddProductComponent },
  { path: 'seller/editProduct', component: EditProductComponent },
  { path: 'seller/viewProduct', component: ViewProductComponent },
  { path: 'buyer/cart', component: CartComponent },
  { path: 'buyer/shopScreen', component: ShopScreenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupPageComponent, LoginPageComponent]