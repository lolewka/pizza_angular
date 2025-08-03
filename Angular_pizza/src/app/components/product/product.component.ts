import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
//Принимаем в дочернем что ушло от родительского
  @Input() product: ProductType;
  //Посылаем родителькому элементу
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

//Добавляем декоратор
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }

}
