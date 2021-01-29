import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesListItemComponent } from './categories-list-item/categories-list-item.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ItemRowComponent } from './homepage-components/item-row/item-row.component';
import { ProductselectionComponent } from './productselection/productselection.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { MyordersComponent } from './myorders/myorders.component';
import { FilterslistComponent } from './filterslist/filterslist.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    ProductListItemComponent,
    ProductsListComponent,
    CartItemComponent,
    CartComponent,
    CartListComponent,
    AccountDetailsComponent,
    PlaceOrderComponent,
    OrderItemComponent,
    OrdersListComponent,
    AdminDashboardComponent,
    CategoriesListComponent,
    CategoriesListItemComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    NavigationBarComponent,
    ItemRowComponent,
    ProductselectionComponent,
    AdminordersComponent,
    MyordersComponent,
    FilterslistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
