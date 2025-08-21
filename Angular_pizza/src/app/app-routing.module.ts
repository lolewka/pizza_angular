import {NgModule} from '@angular/core';
import {RouterModule, Routes,} from '@angular/router';
import {ProductsComponent} from "./components/pages/products/products.component";
import {ProductComponent} from "./components/pages/product/product.component";

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'pizzzas', redirectTo: 'products'},
  {path: 'products/:id', component: ProductComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
