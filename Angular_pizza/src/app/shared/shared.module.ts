import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directivs/cool-input.directive";
import {RouterModule} from "@angular/router";
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    PopupComponent,
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
    PopupComponent,
  ]
})
export class SharedModule { }
