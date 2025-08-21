import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directivs/cool-input.directive";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    // IsChikenDirective,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
  ]
})
export class SharedModule { }
