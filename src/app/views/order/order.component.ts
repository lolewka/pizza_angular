import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CartService} from "../../shared/services/cart.service";
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    // if (this.cartService.product-card) {
    //   this.formValues.productTitle = this.cartService.product-card;
    // }
    // })
    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if (productParam) {
    //   this.formValues.productTitle = productParam;
    // }
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    });
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  // test() {
  //   this.subscription?.unsubscribe();
  // }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  //Объект который хранинит данные с наших импутов
  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
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
    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ! Ваш заказ будет доставлен в течении 24 часов.');
          this.formValues = {
            productTitle: '',
            address: '',
            phone: '',
          }
        } else {
          alert('Ошибка');
        }
      })


    //что бы поля стирались преопределим объект

  }

}
