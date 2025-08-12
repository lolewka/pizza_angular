import {ProductType} from "../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})

export class ProductCardComponent {
//Принимаем в дочернем что ушло от родительского
  @Input() product: ProductType;
  //Посылаем родителькому элементу
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

//Добавляем декоратор
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;
//локально
  @ViewChild('elem')
  private elem!: ElementRef;

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: '',
    }
  }

  // ngAfterViewInit() {
  //   // console.log(this.elem);
  // }

  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }

}
