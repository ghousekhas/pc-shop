import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AuthenticationGuard } from './authentication.guard';
import { ItemRowComponent } from './homepage-components/item-row/item-row.component';
import { HomepageGuard } from './homepage.guard';
import { HomepageComponent } from './homepage/homepage.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductselectionComponent } from './productselection/productselection.component';

const routes: Routes = [

  {path: 'admin-orders',component: AdminordersComponent},
  {path: 'product-selection',canActivate: [HomepageGuard],component: ProductselectionComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'orders-page',component: MyordersComponent,
    canActivate: [HomepageGuard]},
  {path: 'home-page',component: HomepageComponent,canActivate: [HomepageGuard]},
  {path: 'products-page',component: ProductsListComponent},
  {path: 'home',component: LoginPageComponent},
  {path: '**',component: LoginPageComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
