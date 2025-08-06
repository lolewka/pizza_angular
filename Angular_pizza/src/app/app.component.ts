import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {// по факту отсюда нужна делать запрос на бэкенда но так как у нас его нет, мы сделаем так
  public products: ProductType[] = [];

  //Объект который хранинит данные с наших импутов
  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  constructor(private productService:ProductService) {
  }

  //Функция которая отвечает за скролинг к определенному компоненту
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  //Функция которая вызывает название продукта и подстовляет в форму
  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
  }

//Валидация формы
  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Вы не выбрали пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните Адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните Ваши контактные данные');
      return;
    }
    //ajax....
    alert('Спасибо за заказ! Ваш заказ будет доставлен в течении 24 часов.');

    //что бы поля стирались преопределим объект
   this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    }
  }

}
