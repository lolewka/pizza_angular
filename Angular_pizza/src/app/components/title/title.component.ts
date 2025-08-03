import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  //Функция котора берет текущую строку в тайтл
  toUpper(){
    return this.title.toUpperCase();
  }
  toLower(){
    return this.title.toLowerCase();
  }
}
