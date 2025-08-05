import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {// по факту отсюда нужна делать запрос на бэкенда но так как у нас его нет, мы сделаем так
  public products: ProductType[] = [
    {
      image: 'pizza-1.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      datetime: '2022-12-31 17:37:00',
    }, {
      image: '',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      datetime: '2022-12-31 17:37:00',


    }, {
      image: 'pizza-3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      datetime: '2022-12-31 17:37:00',
    }, {
      image: 'pizza-4.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      datetime: '2022-12-31 17:37:00',
    }, {
      image: 'pizza-5.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      datetime: '2022-12-31 17:37:00',
    }, {
      image: 'pizza-6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      datetime: '2022-12-31 17:37:00',
    }, {
      image: 'pizza-7.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      datetime: '2022-12-31 17:37:00',
    }, {
      image: 'pizza-8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      datetime: '2022-12-31 17:37:00',
    },
  ];

  //Объект который хранинит данные с наших импутов
  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  //Функция которая отвечает за скролинг к определенному компоненту
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  //Функция которая вызывает название продукта и подстовляет в форму
  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
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

  lateDate: Promise<string> | null = null;

  ngOnInit() {
    this.lateDate = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello');
      }, 3000)
    })
  }

}
