import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {CoolInputDirective} from './directivs/cool-input.directive';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {CoreModule} from "./core/core.module";
import {ProductsModule} from "./views/products/products.module";
import {HomeModule} from "./views/home/home.module";
import {OrderModule} from "./views/order/order.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoolInputDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    HomeModule,
    CoreModule,
    OrderModule,
    AppRoutingModule,
  ],
  providers: [
    ProductService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
