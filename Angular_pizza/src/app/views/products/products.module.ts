import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./pages/product/product.component";
import {ProductsComponent} from "./pages/products/products.component";
import {TitleComponent} from "./common/title/title.component";
import {ProductCardComponent} from "./common/product-card/product-card.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TitleComponent,
    ProductComponent,
    ProductsComponent,
    ProductCardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ProductsModule { }
