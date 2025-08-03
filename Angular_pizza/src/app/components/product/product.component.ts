import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input, OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');

  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  // ngAfterViewInit() {
  //   // console.log(this.elem);
  // }

  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }

}
