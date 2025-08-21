import {NgModule} from '@angular/core';
import {RouterModule, Routes,} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
      { path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) },
      { path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
    ]
  },


  {path: 'pizzzas', redirectTo: 'products'},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
