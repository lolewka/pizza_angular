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
import {ProductsModule} from "./components/products.module";
import {CoreModule} from "./core/core.module";

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
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    ProductService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
