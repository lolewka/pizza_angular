import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductComponent } from './components/common/product/product.component';
import { TitleComponent } from './components/common/title/title.component';
import { CoolInputDirective } from './directivs/cool-input.directive';
import { MainComponent } from './components/pages/main/main.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    TitleComponent,
    CoolInputDirective,
    MainComponent,
    AboutComponent,
    ProductsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
