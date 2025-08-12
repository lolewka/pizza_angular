import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    // if (this.cartService.product) {
    //   this.formValues.productTitle = this.cartService.product;
    // }

    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (params['product']) {
    //     this.formValues.productTitle = params['product'];
    //   }
    // })

    const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    if (productParam) {
      this.formValues.productTitle = productParam;
    }
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
    alert('Спасибо за заказ! Ваш заказ будет доставлен в течении 24 часов.');

    //что бы поля стирались преопределим объект
    this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    }
  }

  protected readonly test = module
}
