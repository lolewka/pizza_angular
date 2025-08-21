import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../../types/product.type";
import {TitleComponent} from "../title/title.component";

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

  constructor(publiccartProductService: ProductService) {
    this.product = {
      id: 0,
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
