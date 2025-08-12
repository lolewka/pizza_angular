import {Component, Input, } from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent  {
  @Input() title: string = '';

  constructor() {
  }

  //Функция котора берет текущую строку в тайтл
  toUpper() {
    return this.title.toUpperCase();
  }

  toLower() {
    return this.title.toLowerCase();
  }
}
