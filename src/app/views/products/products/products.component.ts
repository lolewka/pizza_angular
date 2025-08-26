import {Component, OnDestroy, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {catchError, map, of, retry, Subscription, tap} from "rxjs";
import {Router} from "@angular/router";
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  //

  private subscriptionGetProducts: Subscription | null = null;

  products: ProductType[] = [];
  loading: boolean = false;


  ngOnDestroy() {
    this.subscriptionGetProducts?.unsubscribe();
  }

  ngOnInit(): void {
//Делаем запрос
    this.loading = true;
    this.subscriptionGetProducts = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      // Что бы вызвать запрос
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }

  // public products: ProductType[] = [
  // {
  //   id: 1,
  //   image: 'pizza-1.png',
  //   title: 'Мясная Делюкс',
  //   description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  // }, {
  //   id: 2,
  //   image: '',
  //   title: 'Морская Премиум',
  //   description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  // }, {
  //   id: 3,
  //   image: 'pizza-3.png',
  //   title: 'Бекон и Сосиски',
  //   description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  // }, {
  //   id: 4,
  //   image: 'pizza-4.png',
  //   title: 'Куриная Делюкс',
  //   description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  // }, {
  //   id: 5,
  //   image: 'pizza-5.png',
  //   title: 'Барбекю Премиум',
  //   description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  // }, {
  //   id: 6,
  //   image: 'pizza-6.png',
  //   title: 'Пепперони Дабл',
  //   description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  // }, {
  //   id: 7,
  //   image: 'pizza-7.png',
  //   title: 'Куриное трио',
  //   description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  // }, {
  //   id: 8,
  //   image: 'pizza-8.png',
  //   title: 'Сырная',
  //   description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  // },
  // ];

  //Функция которая вызывает название продукта и подстовляет в форму
  // public addToCart(title: string): void {
  //   this.cartService.product-card = title;
  //   this.router.navigate(['/order',], {queryParams: {product-card: title}});
  //   //logic
  // }

}
