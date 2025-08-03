import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';

  @ContentChild('second')
  private second!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.second);
  }

  //Функция котора берет текущую строку в тайтл
  toUpper() {
    return this.title.toUpperCase();
  }

  toLower() {
    return this.title.toLowerCase();
  }
}
