import {NgModule} from '@angular/core';
import {RouterModule, Routes,} from '@angular/router';
import {ProductsComponent} from "./components/pages/products/products.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {AuthGuard} from "./core/auth/auth.guard";

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'pizzzas', redirectTo: 'products'},
  {path: 'products/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
