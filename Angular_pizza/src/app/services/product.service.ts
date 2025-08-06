import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType[] {
    //ajax
    return [
      {
        image: 'pizza-1.png',
        title: 'Мясная Делюкс',
        description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      }, {
        image: 'pizza-2.png',
        title: 'Морская Премиум',
        description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      }, {
        image: 'pizza-3.png',
        title: 'Бекон и Сосиски',
        description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      }, {
        image: 'pizza-4.png',
        title: 'Куриная Делюкс',
        description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      }, {
        image: 'pizza-5.png',
        title: 'Барбекю Премиум',
        description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      }, {
        image: 'pizza-6.png',
        title: 'Пепперони Дабл',
        description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      }, {
        image: 'pizza-7.png',
        title: 'Куриное трио',
        description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      }, {
        image: 'pizza-8.png',
        title: 'Сырная',
        description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      },]
  }
}
